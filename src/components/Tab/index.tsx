import { Box, useRadio, UseRadioProps } from '@chakra-ui/react';

import { theme, useHoneycombColorModeValue } from '../../modules/theme';

export type Props = React.InputHTMLAttributes<HTMLInputElement> & UseRadioProps;

export const Tab = (props: Props) => {
  const { getInputProps, getCheckboxProps } = useRadio(props);
  const honeycomb = useHoneycombColorModeValue();

  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <Box as="label">
      <input {...input} />
      <Box
        {...checkbox}
        bg={honeycomb.color.bg.tooltip.normal}
        borderRadius={theme.sizes['9']}
        cursor="pointer"
        _checked={{
          bg: honeycomb.color.text.normal,
          color: honeycomb.color.bg.normal,
          fontWeight: 'bold',
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
