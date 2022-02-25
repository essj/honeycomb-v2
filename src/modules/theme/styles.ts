import { mode } from '@chakra-ui/theme-tools';

import { GoldDark } from './honeycomb/GoldDark';
import { GoldLight } from './honeycomb/GoldLight';

import '../../../node_modules/tippy.js/dist/tippy.css';

const tippyDark = {
  color: GoldDark.honeycomb.color.text.normal,
  backgroundColor: GoldDark.honeycomb.color.bg.normal,
  '.tippy-arrow ': {
    color: GoldDark.honeycomb.color.bg.normal,
  },
};
const tippyLight = {
  color: GoldLight.honeycomb.color.text.normal,
  backgroundColor: GoldLight.honeycomb.color.bg.normal,
  '.tippy-arrow ': {
    color: GoldLight.honeycomb.color.bg.normal,
  },
};

export const styles = {
  global: (props: any) => ({
    body: {
      color: mode(
        GoldLight.honeycomb.color.text.normal,
        GoldDark.honeycomb.color.text.normal,
      )(props),
      bg: mode(GoldLight.honeycomb.color.bg.masked, GoldDark.honeycomb.color.bg.masked)(props),
    },
    '.tippy-box': {
      fontSize: 'xs',
      '.tippy-content': {
        p: 0,
      },
      "&[data-theme='dark']": tippyDark,
      "&[data-theme='light']": tippyLight,
    },
  }),
};
