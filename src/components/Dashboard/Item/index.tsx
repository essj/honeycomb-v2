import { Box, Flex } from '@chakra-ui/react';
import { useState } from 'react';

import { theme, useHoneycombColorModeValue } from '../../../modules/theme';
import { Icon } from '../../Icon';
import { TooltipTutorial, VisibleType } from '../../TooltipTutorial';

export const Actions = () => {
  const honeycomb = useHoneycombColorModeValue();

  const [visible, setVisible] = useState<VisibleType | null>(null);

  return (
    <Box
      sx={{
        '.tippy-content': {
          px: 0,
          py: theme.sizes['2'],
        },
      }}
    >
      <TooltipTutorial
        contentTooltip="Account options"
        contentDropdown={
          <Flex flexDirection="column">
            <p>View in explorer</p>
            <p>Connected sites</p>
          </Flex>
        }
        onVisibleChange={setVisible}
      >
        <Flex
          alignItems="center"
          bg={!!visible ? honeycomb.color.warning.normal : 'none'}
          borderRadius="50%"
          h={theme.sizes['6']}
          justifyContent="center"
          w={theme.sizes['6']}
          _hover={{ bg: honeycomb.color.warning.normal }}
        >
          <Icon.Ellipsis />
        </Flex>
      </TooltipTutorial>
    </Box>
  );
};
