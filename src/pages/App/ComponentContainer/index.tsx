import { Flex, FlexProps, useColorMode } from '@chakra-ui/react';

import { theme } from '../../../modules/theme';

export const ComponentContainer = (props: FlexProps) => {
  const { colorMode } = useColorMode();

  return (
    <Flex
      border="1px dashed"
      borderColor={theme.colors[colorMode].general.normal}
      borderRadius={theme.sizes['4']}
      flexDirection="column"
      padding={theme.sizes['10']}
      sx={{
        '> *:not(:last-child)': {
          marginBottom: theme.sizes['4'],
        },
      }}
      {...props}
    />
  );
};
