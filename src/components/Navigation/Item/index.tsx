import { Box, useColorMode, useRadio, UseRadioProps } from '@chakra-ui/react';

import { theme } from '../../../modules/theme';

export type Props = React.InputHTMLAttributes<HTMLInputElement> & UseRadioProps;

export const Item = (props: Props) => {
  const { colorMode } = useColorMode();
  const { getInputProps, getCheckboxProps } = useRadio(props);

  const checkbox = getCheckboxProps();
  const input = getInputProps();

  return (
    <Box as="label">
      <input {...input} />
      <Box
        {...checkbox}
        color={theme.colors[colorMode].general.normal}
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
            bg={theme.colors[colorMode].scene.primary.normal}
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
