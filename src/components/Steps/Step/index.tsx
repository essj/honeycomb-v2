import { Box, useColorMode, Text, Flex } from '@chakra-ui/react';

import { theme } from '../../../modules/theme';

export const Step = ({
  active = false,
  children,
  label,
}: {
  active?: boolean;
  children: React.ReactNode;
  label: React.ReactNode;
}) => {
  const { colorMode } = useColorMode();

  return (
    <Flex flexDirection="column" alignItems="center" justifyContent="center">
      <Box
        border={`2px solid ${theme.colors[colorMode].general.normal}`}
        borderRadius="50%"
        bg={active ? theme.colors[colorMode].general.normal : 'none'}
        display="flex"
        alignItems="center"
        justifyContent="center"
        h={theme.sizes['8']}
        w={theme.sizes['8']}
      >
        <Text
          color={active ? theme.colors[colorMode].general.inverted : 'initial'}
          fontSize={theme.typography.fontSizes['4']}
          fontWeight="600"
        >
          {children}
        </Text>
      </Box>
      <Text
        color={active ? 'initial' : theme.colors[colorMode].general.masked}
        fontSize={theme.typography.fontSizes['3.5']}
        mt="64px"
        position="absolute"
      >
        {label}
      </Text>
    </Flex>
  );
};
