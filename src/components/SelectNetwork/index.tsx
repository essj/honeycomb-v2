import { Box, Text } from '@chakra-ui/react';
import Tippy from '@tippyjs/react/headless';
import { useMemo, useState } from 'react';

import { theme, useHoneycombColorModeValue } from '../../modules/theme';
import { Icon } from '../Icon';

import { ReactComponent as Arrow } from './arrow.svg';
import { Section } from './Section';

const NETWORKS = ['BNB Beacon Chain', 'BNB Smart Chain', 'Ethereum'];
const NETWORKS_TEST = ['BNB Beacon Chain Test', 'BNB Smart Chain Test', 'Ropsten Test'];

export const SelectNetwork = () => {
  const honeycomb = useHoneycombColorModeValue();

  const [visible, setVisible] = useState(false);

  const bg = useMemo(() => honeycomb.color.bg.normal, [honeycomb.color.bg.normal]);

  return (
    <Tippy
      interactive
      onClickOutside={() => setVisible(false)}
      placement="bottom"
      popperOptions={{
        modifiers: [{ name: 'flip', enabled: false }],
      }}
      render={(attrs) => (
        <Box>
          <Box data-popper-arrow="" top="-6px">
            <Arrow color={bg} />
          </Box>
          <Box bg={bg} borderRadius={theme.sizes['3']} w="320px" {...attrs}>
            <Text
              display="flex"
              fontSize={theme.sizes['5']}
              fontWeight="bold"
              justifyContent="center"
              py={theme.sizes['4']}
            >
              Select Network
            </Text>
            <Section
              accordionProps={{ defaultIndex: 0 }}
              accordionButtonProps={{ alignItems: 'start', h: '30px' }}
              networks={NETWORKS}
              title="Main"
            />
            <Box bg={honeycomb.color.bg.tooltip.accent} h="1px" mx={theme.sizes['4']} />
            <Section
              accordionProps={{ defaultIndex: -1 }}
              accordionButtonProps={{
                alignItems: 'center',
                color: honeycomb.color.text.placeholder,
                h: '42px',
              }}
              networks={NETWORKS_TEST}
              title="Test"
            />
          </Box>
        </Box>
      )}
      visible={visible}
    >
      <Box
        alignItems="center"
        bg={bg}
        borderRadius={theme.sizes['10']}
        cursor="pointer"
        display="flex"
        fontSize={theme.sizes['3']}
        h={theme.sizes['8']}
        justifyContent="center"
        onClick={() => setVisible((value) => !value)}
        position="relative"
      >
        BNB Smart Chain Network
        <Box position="absolute" right={theme.sizes['3']}>
          {visible ? <Icon.CaretUp /> : <Icon.CaretDown />}
        </Box>
      </Box>
    </Tippy>
  );
};
