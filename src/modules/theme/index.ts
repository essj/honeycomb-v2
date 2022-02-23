import { extendTheme } from '@chakra-ui/react';

import { colors } from './colors';
import { components } from './components';
import { shadows } from './shadows';
import { styles } from './styles';

export * from './honeycomb';

export const theme = extendTheme({ colors, components, shadows, styles });
