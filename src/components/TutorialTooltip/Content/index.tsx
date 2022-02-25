import { ChakraProps, Flex } from '@chakra-ui/react';

import { theme } from '../../../modules/theme';

export type Props = ChakraProps & {
  children: React.ReactNode;
};

export const Content = (props: Props) => {
  return <Flex alignItems="center" px={theme.sizes['3']} py={theme.sizes['1.5']} {...props} />;
};
