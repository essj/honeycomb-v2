import { mode } from '@chakra-ui/theme-tools';

import { colors } from '../colors';
import { typography } from '../typography';

const text = (props: any) => {
  return {
    color: mode(colors.light.scene.danger.normal, colors.dark.scene.danger.normal)(props),
    fontSize: typography.fontSizes['3'],
  };
};

export const FormError = {
  baseStyle: (props: any) => ({
    text: text(props),
  }),
};
