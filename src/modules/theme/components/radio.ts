import { mode } from '@chakra-ui/theme-tools';

import { GoldDark } from '../honeycomb/GoldDark';
import { GoldLight } from '../honeycomb/GoldLight';
import { sizes } from '../sizes';

const control = (props: any) => {
  const checkedBase = {
    bg: 'transparent',
    borderColor: mode(
      GoldLight.honeycomb.color.primary.normal,
      GoldDark.honeycomb.color.primary.normal,
    )(props),
    _before: {
      bg: mode(
        GoldLight.honeycomb.color.primary.normal,
        GoldDark.honeycomb.color.primary.normal,
      )(props),
    },
  };

  return {
    bg: 'transparent',
    border: '1px solid',
    borderColor: mode(
      GoldLight.honeycomb.color.text.placeholder,
      GoldDark.honeycomb.color.text.placeholder,
    )(props),
    borderRadius: 'full',
    _checked: {
      ...checkedBase,
      _hover: {
        ...checkedBase,
      },
    },
  };
};

export const Radio = {
  baseStyle: (props: any) => ({
    control: control(props),
  }),
  defaultProps: {
    size: 'md',
  },
  sizes: {
    md: {
      control: { w: sizes['4'], h: sizes['4'] },
      label: { fontSize: sizes['3.5'] },
    },
  },
};
