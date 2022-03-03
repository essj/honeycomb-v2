import { mode } from '@chakra-ui/theme-tools';

import { colors } from '../colors';
import { typography } from '../typography';

const container = {
  display: 'flex',
  alignItems: 'center',
};

const track = (props: any) => {
  const checkedBase = {
    bg: mode(colors.light.scene.primary.normal, colors.dark.scene.primary.normal)(props),
  };

  return {
    bg: mode(colors.light.bg.masked, colors.dark.bg.masked)(props),
    _checked: {
      ...checkedBase,
      _hover: {
        ...checkedBase,
      },
    },
  };
};

const thumb = (props: any) => {
  const checkedBase = {
    bg: '#ffffff',
  };

  return {
    bg: mode(colors.light.general.secondary, colors.dark.general.secondary)(props),
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
    thumb: thumb(props),
    track: track(props),
  }),
  defaultProps: {
    size: 'md',
  },
  sizes: {
    md: {
      label: { fontSize: typography.fontSizes['3.5'] },
    },
  },
};
