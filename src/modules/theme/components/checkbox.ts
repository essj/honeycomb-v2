import { mode } from '@chakra-ui/theme-tools';

import { colors } from '../colors';
import { sizes } from '../sizes';
import { typography } from '../typography';

const control = (props: any) => {
  const checkedBase = {
    bg: mode(colors.light.general.normal, colors.dark.general.normal)(props),
    borderColor: mode(colors.light.general.normal, colors.dark.general.normal)(props),
  };

  return {
    bg: 'none',
    border: '1px solid',
    borderColor: mode(colors.light.general.masked, colors.dark.general.masked)(props),
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
      label: { fontSize: typography.fontSizes['3.5'] },
      icon: { fontSize: typography.fontSizes['2'] },
    },
  },
};
