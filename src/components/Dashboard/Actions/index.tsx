import { Box, Flex } from '@chakra-ui/react';
import { TippyProps } from '@tippyjs/react';
import { useMemo, useState } from 'react';

import { theme, useHoneycombColorModeValue } from '../../../modules/theme';
import { Icon } from '../../Icon';
import { TutorialTooltip, VisibleType } from '../../TutorialTooltip';

import { Item } from './Item';

export const Actions = () => {
  const honeycomb = useHoneycombColorModeValue();

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
      <TutorialTooltip
        contentTooltip={<TutorialTooltip.Content>Account options</TutorialTooltip.Content>}
        contentDropdown={
          <Flex flexDirection="column" py={theme.sizes['2']}>
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
          bg={!!visible ? honeycomb.color.warning.normal : 'none'}
          borderRadius="50%"
          h={theme.sizes['6']}
          justifyContent="center"
          w={theme.sizes['6']}
          _hover={{ bg: honeycomb.color.warning.normal }}
        >
          <Icon.Ellipsis />
        </Flex>
      </TutorialTooltip>
    </Box>
  );
};
