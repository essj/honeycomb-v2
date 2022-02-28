import { inputAnatomy as parts } from '@chakra-ui/anatomy';
import { mode, PartsStyleFunction, SystemStyleObject } from '@chakra-ui/theme-tools';

import { GoldDark } from '../honeycomb/GoldDark';
import { GoldLight } from '../honeycomb/GoldLight';
import { sizes } from '../sizes';

const outline: PartsStyleFunction<typeof parts> = (props: any) => {
  const invalidBase = {
    bg: mode(
      GoldLight.honeycomb.color.bg.tooltip.outer,
      GoldDark.honeycomb.color.bg.tooltip.outer,
    )(props),
    borderColor: mode(
      GoldLight.honeycomb.color.danger.normal,
      GoldDark.honeycomb.color.danger.normal,
    )(props),
    boxShadow: 'none',
    caretColor: mode(
      GoldLight.honeycomb.color.danger.normal,
      GoldDark.honeycomb.color.danger.normal,
    )(props),
  };

  const base = {
    bg: mode(
      GoldLight.honeycomb.color.bg.tooltip.outer,
      GoldDark.honeycomb.color.bg.tooltip.outer,
    )(props),
    borderColor: mode(
      GoldLight.honeycomb.color.bg.tooltip.accent,
      GoldDark.honeycomb.color.bg.tooltip.accent,
    )(props),
    boxShadow: 'none',
    _invalid: {
      ...invalidBase,
    },
  };

  return {
    field: {
      ...base,
      border: '1px solid',
      caretColor: mode(
        GoldLight.honeycomb.color.primary.normal,
        GoldDark.honeycomb.color.primary.normal,
      )(props),
      _hover: {
        ...base,
      },
      _readOnly: {
        ...base,
      },
      _disabled: {
        ...base,
        opacity: 0.3,
        cursor: 'not-allowed',
      },
      _invalid: {
        ...invalidBase,
      },
      _focus: {
        ...base,
      },
      _placeholder: {
        color: mode(
          GoldLight.honeycomb.color.text.placeholder,
          GoldDark.honeycomb.color.text.placeholder,
        )(props),
      },
    },
    addon: {
      ...base,
    },
  };
};

const size: Record<string, SystemStyleObject> = {
  lg: {
    fontSize: 'xl',
    px: sizes['5'],
    py: sizes['4'],
    h: 'auto',
    borderRadius: sizes['2'],
  },

  md: {
    fontSize: 'sm',
    px: sizes['5'],
    py: sizes['4'],
    h: 'auto',
    borderRadius: sizes['2'],
  },

  sm: {
    fontSize: 'xs',
    px: sizes['4'],
    py: sizes['3'],
    h: 'auto',
    borderRadius: sizes['1'],
  },

  xs: {
    fontSize: 'xs',
    px: sizes['4'],
    py: sizes['3'],
    h: 'auto',
    borderRadius: sizes['1'],
  },
};

export const Input = {
  defaultProps: {
    size: 'md',
    variant: 'outline',
  },
  sizes: {
    lg: {
      field: size.lg,
      addon: size.lg,
    },
    md: {
      field: size.md,
      addon: size.md,
    },
    sm: {
      field: size.sm,
      addon: size.sm,
    },
    xs: {
      field: size.xs,
      addon: size.xs,
    },
  },
  variants: {
    outline,
  },
};
