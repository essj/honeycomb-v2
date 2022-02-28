import { Box, Flex, Text } from '@chakra-ui/react';

import { formatFiatAsset } from '../../modules/intl';
import { GoldLight, theme, useHoneycombColorModeValue } from '../../modules/theme';
import { CopyToClipboardAccountAddress } from '../CopyToClipboardAccountAddress';
import { TooltipTutorial } from '../TooltipTutorial';

import { Actions } from './Actions';

export const Dashboard = () => {
  const honeycomb = useHoneycombColorModeValue();

  return (
    <Flex
      alignItems="center"
      bg={honeycomb.color.primary.active}
      borderRadius={theme.sizes['3']}
      color={GoldLight.honeycomb.color.text.normal}
      flexDirection="column"
      h="150px"
      p={theme.sizes['4']}
      pt={theme.sizes['3']}
    >
      <Flex
        alignItems="center"
        justifyContent="space-between"
        mb={`-${theme.sizes['2']}`}
        width="100%"
      >
        <TooltipTutorial
          contentTooltip={<TooltipTutorial.Content>Not connected</TooltipTutorial.Content>}
        >
          <Box
            bg={GoldLight.honeycomb.color.text.normal}
            borderRadius="50%"
            h="10px"
            opacity={0.4}
            w="10px"
          />
        </TooltipTutorial>
        <Actions />
      </Flex>
      <CopyToClipboardAccountAddress
        account="Account 1"
        address="0x00000000000"
        variant="primary"
      />
      <Text fontSize={theme.sizes['10']} fontWeight="bold" mt={`-${theme.sizes['2']}`}>
        {formatFiatAsset({ locale: 'en-US', amount: 1000, currency: 'USD' })}
      </Text>
    </Flex>
  );
};
