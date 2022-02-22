import { mode } from '@chakra-ui/theme-tools';

import { GoldDark } from '../honeycomb/GoldDark';
import { GoldLight } from '../honeycomb/GoldLight';
import { sizes } from '../sizes';

const primary = (props: any) => {
  const base = {
    bg: mode(
      GoldLight.honeycomb.color.primary.normal,
      GoldDark.honeycomb.color.primary.normal,
    )(props),
    color: GoldLight.honeycomb.color.text.normal,
  };

  return {
    ...base,
    _hover: {
      bg: GoldLight.honeycomb.color.primary.active,
      _disabled: {
        ...base,
      },
    },
  };
};

const secondary = (props: any) => {
  const base = {
    bg: mode(
      GoldLight.honeycomb.color.bg.tooltip.accent,
      GoldDark.honeycomb.color.bg.tooltip.accent,
    )(props),
    color: mode(GoldLight.honeycomb.color.text.normal, GoldDark.honeycomb.color.text.normal)(props),
  };

  return {
    ...base,
    _hover: {
      bg: mode(
        GoldLight.honeycomb.color.primary.normal,
        GoldDark.honeycomb.color.primary.normal,
      )(props),
      color: GoldLight.honeycomb.color.text.normal,
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
    borderColor: mode(
      GoldLight.honeycomb.color.text.disabled,
      GoldDark.honeycomb.color.text.disabled,
    )(props),
    color: mode(GoldLight.honeycomb.color.text.normal, GoldDark.honeycomb.color.text.normal)(props),
  };

  return {
    ...base,
    _active: {
      ...base,
    },
    _hover: {
      bg: 'none',
      borderColor: mode(
        GoldLight.honeycomb.color.primary.normal,
        GoldDark.honeycomb.color.primary.normal,
      )(props),
      _disabled: {
        ...base,
      },
    },
  };
};

const ghost = (props: any) => {
  const base = {
    bg: 'none',
    color: mode(GoldLight.honeycomb.color.text.normal, GoldDark.honeycomb.color.text.normal)(props),
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
      color: mode(
        GoldLight.honeycomb.color.text.normal,
        GoldDark.honeycomb.color.text.normal,
      )(props),
      opacity: '1.0',
      _disabled: {
        ...base,
      },
    },
  };
};

export const Button = {
  baseStyle: (props: any) => ({
    bg: mode(GoldLight.honeycomb.color.bg.normal, GoldDark.honeycomb.color.bg.normal)(props),
    borderRadius: sizes['2'],
    color: mode(GoldLight.honeycomb.color.text.normal, GoldDark.honeycomb.color.text.normal)(props),
    iconSpacing: sizes['1'],
  }),
  defaultProps: {
    variant: 'primary',
  },
  sizes: {
    md: {
      h: '45px',
      fontSize: sizes['3.5'],
    },
    lg: {
      h: '53px',
      fontSize: sizes['3.5'],
    },
  },
  variants: {
    primary,
    secondary,
    outline,
    ghost,
  },
};
