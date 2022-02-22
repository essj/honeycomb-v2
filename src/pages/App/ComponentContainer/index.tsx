import React from 'react';
import { Flex } from '@chakra-ui/react';

import { theme } from '../../../modules/theme';

export const ComponentContainer = (props: React.ComponentPropsWithoutRef<typeof Flex>) => {
  return (
    <Flex
      border="1px dashed black"
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
