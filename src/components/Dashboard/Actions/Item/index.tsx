import { Flex, Text } from '@chakra-ui/react';

import { theme, useHoneycombColorModeValue } from '../../../../modules/theme';

export type Props = {
  icon: React.ReactNode;
  title: React.ReactNode;
};

export const Item = ({ icon, title }: Props) => {
  const honeycomb = useHoneycombColorModeValue();

  return (
    <Flex
      alignItems="center"
      cursor="pointer"
      px={theme.sizes['5']}
      py={theme.sizes['3']}
      _hover={{
        bg: honeycomb.color.bg.tooltip.accent,
      }}
    >
      {icon}
      <Text ml={theme.sizes['2']}>{title}</Text>
    </Flex>
  );
};
