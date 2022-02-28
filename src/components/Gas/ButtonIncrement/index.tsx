import { Button, ButtonProps } from '@chakra-ui/react';

import { theme } from '../../../modules/theme';

export type Props = Pick<ButtonProps, 'children'>;

export const ButtonIncrement = ({ ...otherProps }: Props) => {
  return (
    <Button
      borderRadius="50%"
      h={theme.sizes['7']}
      minW="auto"
      paddingInline="0"
      variant="secondary"
      w={theme.sizes['7']}
      {...otherProps}
    />
  );
};
