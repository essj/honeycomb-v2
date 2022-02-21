import { mode } from '@chakra-ui/theme-tools';

import { GoldDark } from '../honeycomb/GoldDark';
import { GoldLight } from '../honeycomb/GoldLight';
import { sizes } from '../sizes';

const control = (props: any) => {
  const checkedBase = {
    bg: mode(GoldLight.honeycomb.color.text.normal, GoldDark.honeycomb.color.text.normal)(props),
    borderColor: mode(
      GoldLight.honeycomb.color.text.normal,
      GoldDark.honeycomb.color.text.normal,
    )(props),
  };

  return {
    bg: 'transparent',
    border: '1px solid',
    borderColor: mode(
      GoldLight.honeycomb.color.text.placeholder,
      GoldDark.honeycomb.color.text.placeholder,
    )(props),
    borderRadius: sizes['1'],
    _checked: {
      ...checkedBase,
      _hover: {
        ...checkedBase,
      },
    },
  };
};

export const Checkbox = {
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
      icon: { fontSize: sizes['2'] },
    },
  },
};
