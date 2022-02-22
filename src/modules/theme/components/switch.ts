import { mode } from '@chakra-ui/theme-tools';

import { GoldDark } from '../honeycomb/GoldDark';
import { GoldLight } from '../honeycomb/GoldLight';
import { sizes } from '../sizes';

const container = {
  display: 'flex',
  alignItems: 'center',
};

const track = (props: any) => {
  const checkedBase = {
    bg: mode(
      GoldLight.honeycomb.color.primary.normal,
      GoldDark.honeycomb.color.primary.normal,
    )(props),
  };

  return {
    bg: mode(
      GoldLight.honeycomb.color.bg.tooltip.outer,
      GoldDark.honeycomb.color.bg.tooltip.outer,
    )(props),
    _checked: {
      ...checkedBase,
      _hover: {
        ...checkedBase,
      },
    },
  };
};

export const Switch = {
  baseStyle: (props: any) => ({
    container,
    track: track(props),
  }),
  defaultProps: {
    size: 'md',
  },
  sizes: {
    md: {
      label: { fontSize: sizes['3.5'] },
    },
  },
};
