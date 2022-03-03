import { Flex, Text, useColorMode } from '@chakra-ui/react';

import { theme } from '../../../../modules/theme';

export type Props = {
  icon: React.ReactNode;
  title: React.ReactNode;
};

export const Item = ({ icon, title }: Props) => {
  const { colorMode } = useColorMode();

  return (
    <Flex
      alignItems="center"
      cursor="pointer"
      px={theme.sizes['5']}
      py={theme.sizes['3']}
      _hover={{
        bg: theme.colors[colorMode].bg.accent,
      }}
    >
      {icon}
      <Text ml={theme.sizes['2']}>{title}</Text>
    </Flex>
  );
};
