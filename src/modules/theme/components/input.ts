import { inputAnatomy as parts } from '@chakra-ui/anatomy';
import { mode, PartsStyleFunction, SystemStyleObject } from '@chakra-ui/theme-tools';

import { colors } from '../colors';
import { sizes } from '../sizes';
import { typography } from '../typography';

const outline: PartsStyleFunction<typeof parts> = (props: any) => {
  const invalidBase = {
    bg: mode(colors.light.bg.input, colors.dark.bg.input)(props),
    borderColor: mode(colors.light.scene.danger.normal, colors.dark.scene.danger.normal)(props),
    boxShadow: 'none',
    caretColor: mode(colors.light.scene.danger.normal, colors.dark.scene.danger.normal)(props),
  };

  const base = {
    bg: mode(colors.light.bg.input, colors.dark.bg.input)(props),
    borderColor: mode(colors.light.bg.input, colors.dark.bg.input)(props),
    boxShadow: 'none',
    _invalid: {
      ...invalidBase,
    },
  };

  return {
    field: {
      ...base,
      border: '1px solid',
      caretColor: mode(colors.light.scene.primary.normal, colors.dark.scene.primary.normal)(props),
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
        color: mode(colors.light.general.masked, colors.dark.general.masked)(props),
      },
    },
    addon: {
      ...base,
    },
  };
};

const size: Record<string, SystemStyleObject> = {
  lg: {
    fontSize: typography.fontSizes['6'],
    px: sizes['5'],
    py: sizes['4'],
    h: 'auto',
    borderRadius: sizes['2'],
  },

  md: {
    fontSize: typography.fontSizes['3.5'],
    px: sizes['5'],
    py: sizes['4'],
    h: 'auto',
    borderRadius: sizes['2'],
  },

  sm: {
    fontSize: typography.fontSizes['3'],
    px: sizes['4'],
    py: sizes['3'],
    h: 'auto',
    borderRadius: sizes['1'],
  },

  xs: {
    fontSize: typography.fontSizes['3'],
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
