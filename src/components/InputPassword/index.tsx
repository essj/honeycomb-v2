import { Box, Input, InputProps } from '@chakra-ui/react';
import Tippy from '@tippyjs/react';
import React, { useCallback, useState } from 'react';
// import { useIntl } from 'react-intl';

import { theme } from '../../modules/theme';
import { TooltipTutorial } from '../TooltipTutorial';

import { useInputPasswordValidation } from './useInputPasswordValidation';

export const InputPassword = ({ onBlur, onChange, onFocus, ...otherProps }: InputProps) => {
  // const { formatMessage } = useIntl();

  const [isFocused, setFocused] = useState(false);
  const [isPristine, setPristine] = useState(true);

  const inputPasswordValidation = useInputPasswordValidation({ value: otherProps.value });

  const focus = useCallback<NonNullable<InputProps['onFocus']>>(
    (evt) => {
      setFocused(true);
      onFocus?.(evt);
    },
    [onFocus],
  );

  const blur = useCallback<NonNullable<InputProps['onBlur']>>(
    (evt) => {
      setFocused(false);
      onBlur?.(evt);
    },
    [onBlur],
  );

  const change = useCallback<NonNullable<InputProps['onChange']>>(
    (evt) => {
      setPristine(false);
      onChange?.(evt);
    },
    [onChange],
  );

  return (
    <Box
      sx={{
        '.tippy-box': {
          '.tippy-arrow': {
            transform: `translate3d(${theme.sizes['4']}, 0px, 0px) !important`,
          },
        },
      }}
    >
      <Tippy
        arrow
        content={
          <TooltipTutorial.Content
            alignItems="start"
            flexDirection="column"
            size={2}
            sx={{
              '*:first-of-type': {
                mt: 0,
              },
            }}
          >
            {inputPasswordValidation.errors.map((it, index) => (
              <React.Fragment key={index}>{it}</React.Fragment>
            ))}
          </TooltipTutorial.Content>
        }
        interactive
        placement="top-start"
        popperOptions={{
          modifiers: [{ name: 'flip', enabled: false }],
        }}
        visible={isFocused}
      >
        <Input
          isInvalid={!isPristine && !inputPasswordValidation.isValid}
          // placeholder={formatMessage({ id: 'generic.password' })}
          onFocus={focus}
          onBlur={blur}
          onChange={change}
          type="password"
          {...otherProps}
        />
      </Tippy>
    </Box>
  );
};
