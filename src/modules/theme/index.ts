import { extendTheme } from '@chakra-ui/react';
import {} from '@chakra-ui/theme-tools';

import { breakpoints } from './breakpoints';
import { colors } from './colors';
import { components } from './components';
import { config } from './config';
import { shadows } from './shadows';
import { sizes } from './sizes';
import { styles } from './styles';
import { typography } from './typography';

const extensions = { breakpoints, colors, components, config, shadows, sizes, styles, typography };
type ThemeType = typeof extensions;

export const theme = extendTheme(extensions) as ThemeType;
