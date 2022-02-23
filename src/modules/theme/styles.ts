import { mode } from '@chakra-ui/theme-tools';

import { GoldDark } from './honeycomb/GoldDark';
import { GoldLight } from './honeycomb/GoldLight';

export const styles = {
  global: (props: any) => ({
    body: {
      color: mode(
        GoldLight.honeycomb.color.text.normal,
        GoldDark.honeycomb.color.text.normal,
      )(props),
      bg: mode(GoldLight.honeycomb.color.bg.normal, GoldDark.honeycomb.color.border)(props),
    },
  }),
};
