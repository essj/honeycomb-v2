import { extendTheme, Theme } from '@chakra-ui/react';

import { colors } from './colors';
import { components } from './components';
import { shadows } from './shadows';
import { styles } from './styles';
import { typography } from './typography';

const extensions = { colors, components, shadows, styles, typography };
type ThemeType = Theme & typeof extensions;

export const theme = extendTheme(extensions) as ThemeType;
