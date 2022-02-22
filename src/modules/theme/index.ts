import { ChakraTheme, extendTheme, Theme } from '@chakra-ui/react';

import { colors } from './colors';
import { components } from './components';
import { shadows } from './shadows';

export * from './honeycomb';

export type Themex = ChakraTheme & {
  colors: typeof colors;
  components: typeof components;
  shadows: typeof shadows;
};

export const theme = extendTheme({ colors, components, shadows }) as Theme;
