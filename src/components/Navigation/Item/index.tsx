import { Box, useRadio, UseRadioProps } from '@chakra-ui/react';

import { theme, useHoneycombColorModeValue } from '../../../modules/theme';

export type Props = React.InputHTMLAttributes<HTMLInputElement> & UseRadioProps;

export const Item = (props: Props) => {
  const { getInputProps, getCheckboxProps } = useRadio(props);
  const honeycomb = useHoneycombColorModeValue();

  const checkbox = getCheckboxProps();
  const input = getInputProps();

  return (
    <Box as="label">
      <input {...input} />
      <Box
        {...checkbox}
        color={honeycomb.color.text.normal}
        cursor="pointer"
        opacity={0.2}
        position="relative"
        _checked={{
          opacity: 1,
        }}
        _hover={{
          opacity: 1,
        }}
      >
        {props.children}
        {props.isChecked && (
          <Box
            h={theme.sizes['1']}
            w={theme.sizes['1']}
            bg={honeycomb.color.primary.normal}
            borderRadius="50%"
            position="absolute"
            top="77%"
            left="25px" // (SVG 54px / 2) - (width / 2).
          />
        )}
      </Box>
    </Box>
  );
};
