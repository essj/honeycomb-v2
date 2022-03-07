import { ChakraProps, ColorMode, Flex, useColorMode } from '@chakra-ui/react';
import { useMemo } from 'react';

import { theme } from '../../../modules/theme';

type Props = ChakraProps & {
  children: React.ReactNode;
};

export const Content = (props: Props) => {
  const { colorMode: _colorMode } = useColorMode();

  const colorMode = useMemo((): ColorMode => {
    return _colorMode === 'dark' ? 'light' : 'dark';
  }, [_colorMode]);

  return (
    <Flex
      alignItems="center"
      bg={theme.colors[colorMode].bg.normal}
      borderRadius={theme.sizes['1']}
      color={theme.colors[colorMode].general.normal}
      fontSize={theme.typography.fontSizes['3']}
      px={theme.sizes['3']}
      py={theme.sizes['1.5']}
      {...props}
    />
  );
};
