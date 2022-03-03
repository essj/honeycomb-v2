import { mode } from '@chakra-ui/theme-tools';

import { colors } from '../colors';
import { sizes } from '../sizes';
import { typography } from '../typography';

const primary = (props: any) => {
  const base = {
    bg: mode(colors.light.scene.primary.normal, colors.dark.scene.primary.normal)(props),
    color: colors.light.general.normal,
  };

  return {
    ...base,
    _hover: {
      bg: mode(colors.light.scene.primary.active, colors.dark.scene.primary.active)(props),
      _disabled: {
        ...base,
      },
    },
  };
};

const secondary = (props: any) => {
  const base = {
    bg: mode(colors.light.bg.accent, colors.dark.bg.accent)(props),
    color: mode(colors.light.general.normal, colors.dark.general.normal)(props),
  };

  return {
    ...base,
    _hover: {
      bg: mode(colors.light.scene.primary.normal, colors.dark.scene.primary.normal)(props),
      color: colors.light.general.normal,
      _disabled: {
        ...base,
      },
    },
  };
};

const outline = (props: any) => {
  const base = {
    bg: 'none',
    border: '1px solid',
    borderColor: mode(colors.light.scene.border, colors.dark.scene.border)(props),
    color: mode(colors.light.general.normal, colors.dark.general.normal)(props),
  };

  return {
    ...base,
    _active: {
      ...base,
    },
    _hover: {
      bg: 'none',
      borderColor: mode(colors.light.scene.primary.normal, colors.dark.scene.primary.normal)(props),
      _disabled: {
        ...base,
      },
    },
  };
};

const ghost = (props: any) => {
  const base = {
    bg: 'none',
    color: mode(colors.light.general.normal, colors.dark.general.normal)(props),
    opacity: '0.3',
  };

  return {
    ...base,
    _active: {
      ...base,
    },
    _focus: {
      boxShadow: 'none',
    },
    _hover: {
      bg: 'none',
      color: mode(colors.light.general.normal, colors.dark.general.normal)(props),
      opacity: '1.0',
      _disabled: {
        ...base,
      },
    },
  };
};

export const Button = {
  baseStyle: (props: any) => ({
    bg: mode(colors.light.bg.normal, colors.dark.bg.normal)(props),
    borderRadius: sizes['2'],
    color: mode(colors.light.general.normal, colors.dark.general.normal)(props),
    iconSpacing: sizes['1'],
  }),
  defaultProps: {
    variant: 'primary',
  },
  sizes: {
    md: {
      h: '45px',
      fontSize: typography.fontSizes['3.5'],
    },
    lg: {
      h: '53px',
      fontSize: typography.fontSizes['3.5'],
    },
  },
  variants: {
    primary,
    secondary,
    outline,
    ghost,
  },
};
