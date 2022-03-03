import { Box, useColorMode, useRadio, UseRadioProps } from '@chakra-ui/react';

import { theme } from '../../modules/theme';

export type Props = React.InputHTMLAttributes<HTMLInputElement> & UseRadioProps;

export const Tab = (props: Props) => {
  const { getInputProps, getCheckboxProps } = useRadio(props);
  const { colorMode } = useColorMode();

  const checkbox = getCheckboxProps();
  const input = getInputProps();

  return (
    <Box as="label">
      <input {...input} />
      <Box
        {...checkbox}
        bg={theme.colors[colorMode].bg.secondary}
        borderRadius={theme.sizes['9']}
        cursor="pointer"
        fontSize={theme.typography.fontSizes['3']}
        _checked={{
          bg: theme.colors[colorMode].general.normal,
          color: theme.colors[colorMode].bg.normal,
          fontWeight: '700',
        }}
        _focus={{
          boxShadow: 'outline',
        }}
        px={theme.sizes['4']}
        py={theme.sizes['2']}
      >
        {props.children}
      </Box>
    </Box>
  );
};
