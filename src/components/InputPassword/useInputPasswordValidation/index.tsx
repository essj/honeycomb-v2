import { ColorMode, Text, InputProps, useColorMode } from '@chakra-ui/react';
import { useState, useEffect, useMemo } from 'react';
// import { useIntl } from 'react-intl';

import { theme } from '../../../modules/theme';

const validationBaseStyle = (colorMode: ColorMode) => ({
  color: theme.colors[colorMode].scene.danger.normal,
  fontSize: theme.typography.fontSizes['3'],
});

const validationSuccessStyle = (colorMode: ColorMode) => ({
  color: theme.colors[colorMode].scene.success.normal,
});

type Params = {
  value: InputProps['value'];
  minLength?: number;
  mustHaveUpperCase?: boolean;
  mustHaveSymbol?: boolean;
  mustHaveDigit?: boolean;
};

export const useInputPasswordValidation = ({
  value,
  minLength = 8,
  mustHaveDigit = true,
  mustHaveSymbol = true,
  mustHaveUpperCase = true,
}: Params) => {
  const { colorMode } = useColorMode();
  // const { formatMessage } = useIntl();

  const [isLongEnough, setIsLongEnough] = useState(false);
  const [hasUpperCase, setHasUpperCase] = useState(false);
  const [hasSymbol, setHasSymbol] = useState(false);
  const [hasDigit, setHasDigit] = useState(false);

  useEffect(() => {
    if (typeof value !== 'string') {
      setIsLongEnough(false);
      setHasUpperCase(false);
      setHasSymbol(false);
      setHasDigit(false);
      return;
    }

    setIsLongEnough(value.length >= minLength);
    setHasUpperCase(/[A-Z]/.test(value));
    setHasSymbol(/[^a-z0-9]/i.test(value));
    setHasDigit(/[0-9]/.test(value));
  }, [value, minLength]);

  const isValid = useMemo(() => {
    if (mustHaveDigit && !hasDigit) return false;
    if (mustHaveSymbol && !hasSymbol) return false;
    if (mustHaveUpperCase && !hasUpperCase) return false;
    return isLongEnough;
  }, [
    isLongEnough,
    hasUpperCase,
    hasSymbol,
    hasDigit,
    mustHaveDigit,
    mustHaveSymbol,
    mustHaveUpperCase,
  ]);

  const errors = [
    <Text
      {...validationBaseStyle(colorMode)}
      {...(isLongEnough && validationSuccessStyle(colorMode))}
    >
      length
      {/* {formatMessage({ id: 'component.input-password.validation.length' })} */}
    </Text>,

    <Text
      {...validationBaseStyle(colorMode)}
      {...(hasUpperCase && validationSuccessStyle(colorMode))}
    >
      case
      {/* {formatMessage({ id: 'component.input-password.validation.case' })} */}
    </Text>,
    <Text {...validationBaseStyle(colorMode)} {...(hasDigit && validationSuccessStyle(colorMode))}>
      digit
      {/* {formatMessage({ id: 'component.input-password.validation.digit' })} */}
    </Text>,

    <Text {...validationBaseStyle(colorMode)} {...(hasSymbol && validationSuccessStyle(colorMode))}>
      symbol
      {/* {formatMessage({ id: 'component.input-password.validation.symbol' })} */}
    </Text>,
  ];

  return { isValid, errors };
};
