import { mode } from '@chakra-ui/theme-tools';

import '../../../node_modules/tippy.js/dist/tippy.css';

import { colors } from './colors';
import { typography } from './typography';

const tippyDark = {
  color: colors.dark.general.normal,
  backgroundColor: colors.dark.bg.normal,
  '.tippy-arrow ': {
    color: colors.dark.bg.normal,
  },
};
const tippyLight = {
  color: colors.light.general.normal,
  backgroundColor: colors.light.bg.normal,
  '.tippy-arrow ': {
    color: colors.light.bg.normal,
  },
};

export const styles = {
  global: (props: any) => ({
    body: {
      color: mode(colors.light.general.normal, colors.dark.general.normal)(props),
      bg: mode(colors.light.bg.normal, colors.dark.bg.normal)(props),
    },
    '.tippy-box': {
      fontSize: typography.fontSizes['3'],
      '.tippy-content': {
        p: 0,
      },
      "&[data-theme='dark']": tippyDark,
      "&[data-theme='light']": tippyLight,
    },
  }),
};
