import React from 'react';
import { Flex } from '@chakra-ui/react';

import { theme, useHoneycombColorModeValue } from '../../../modules/theme';

export const ComponentContainer = (props: React.ComponentPropsWithoutRef<typeof Flex>) => {
  const honeycomb = useHoneycombColorModeValue();

  return (
    <Flex
      border="1px dashed"
      borderColor={honeycomb.color.text.normal}
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
