import { ChakraTheme, extendTheme } from '@chakra-ui/react';

import { colors } from './colors';
import { components } from './components';
import { shadows } from './shadows';
import { sizes } from './sizes';

export * from './honeycomb';

export type Theme = ChakraTheme & {
  colors: typeof colors;
  components: typeof components;
  shadows: typeof shadows;
  sizes: typeof sizes;
};

export const theme = extendTheme({ colors, components, shadows, sizes }) as Theme;
