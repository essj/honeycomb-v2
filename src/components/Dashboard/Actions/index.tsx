import { Box, Flex, useColorMode } from '@chakra-ui/react';
import { TippyProps } from '@tippyjs/react';
import { useMemo, useState } from 'react';

import { theme } from '../../../modules/theme';
import { Icon } from '../../Icon';
import { TooltipTutorial, VisibleType } from '../../TooltipTutorial';

import { Item } from './Item';

export const Actions = () => {
  const { colorMode } = useColorMode();

  const [visible, setVisible] = useState<VisibleType | null>(null);

  const tippyPlacement = useMemo((): TippyProps['placement'] => {
    if (!visible) return undefined;
    if (visible === VisibleType.Dropdown) return 'bottom-end';
    return 'top';
  }, [visible]);

  return (
    <Box
      sx={
        visible === VisibleType.Dropdown
          ? {
              '.tippy-box': {
                borderRadius: theme.sizes['3'],
                transform: `translateX(${theme.sizes['4']});`,
                '.tippy-arrow::before': {
                  transform: `translateX(-${theme.sizes['4']});`,
                },
                '.tippy-content': {
                  borderRadius: theme.sizes['3'],
                },
                transitionDuration: '0ms !important', // Remove animation because it doesn't work with our manual positioning.
              },
            }
          : undefined
      }
    >
      <TooltipTutorial
        contentTooltip={<TooltipTutorial.Content>Account options</TooltipTutorial.Content>}
        contentDropdown={
          <Flex
            bg={theme.colors[colorMode].bg.normal}
            borderRadius={theme.sizes['3']}
            color={theme.colors[colorMode].general.normal}
            flexDirection="column"
            fontSize={theme.typography.fontSizes['3']}
            py={theme.sizes['2']}
          >
            <Item icon={<Icon.ExternalLink />} title="View account in explorer" />
            <Item icon={<Icon.Connect />} title="Connected sites" />
          </Flex>
        }
        onVisibleChange={setVisible}
        placement={tippyPlacement}
        popperOptions={{
          modifiers: [{ name: 'flip', enabled: false }],
        }}
      >
        <Flex
          alignItems="center"
          bg={!!visible ? theme.colors[colorMode].scene.warning.normal : 'none'}
          borderRadius="50%"
          h={theme.sizes['6']}
          justifyContent="center"
          w={theme.sizes['6']}
          _hover={{ bg: theme.colors[colorMode].scene.warning.normal }}
        >
          <Icon.Ellipsis />
        </Flex>
      </TooltipTutorial>
    </Box>
  );
};
