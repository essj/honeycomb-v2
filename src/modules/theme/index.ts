import { ChakraTheme, extendTheme } from '@chakra-ui/react';

import { colors } from './colors';
import { components } from './components';
import { shadows } from './shadows';
import { sizes } from './sizes';
import { typography } from './typography';

export type Theme = ChakraTheme & {
  colors: typeof colors;
  components: typeof components;
  shadows: typeof shadows;
  sizes: typeof sizes;
  typography: typeof typography;
};

export const theme = extendTheme({ colors, components, shadows, sizes, typography }) as Theme;
