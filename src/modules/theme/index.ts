import { extendTheme } from '@chakra-ui/react';

import { colors } from './colors';
import { components } from './components';
import { shadows } from './shadows';
import { sizes } from './sizes';
import { typography } from './typography';

export const theme = extendTheme({ colors, components, shadows, sizes, typography });
