import { Box, useColorMode } from '@chakra-ui/react';

import { theme } from '../../../modules/theme';

export const Divider = () => {
  const { colorMode } = useColorMode();

  return <Box bg={theme.colors[colorMode].general.normal} h={theme.sizes['0.5']} w="60px" />;
};
