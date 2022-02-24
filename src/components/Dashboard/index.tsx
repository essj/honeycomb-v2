import { Box, Flex, Text } from '@chakra-ui/react';

import { formatFiatAsset } from '../../modules/intl';
import { GoldLight, theme, useHoneycombColorModeValue } from '../../modules/theme';
import { AccountAddressCopyToClipboard } from '../AccountAddressCopyToClipboard';
import { TutorialTooltip } from '../TutorialTooltip';

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
        mb={`-${theme.sizes['1']}`}
        width="100%"
      >
        <TutorialTooltip contentTooltip="Not connected">
          <Box
            bg={GoldLight.honeycomb.color.text.normal}
            borderRadius="50%"
            h="10px"
            opacity={0.4}
            w="10px"
          />
        </TutorialTooltip>
        <Actions />
      </Flex>
      <AccountAddressCopyToClipboard
        account="Account 1"
        address="0x00000000000"
        variant="primary"
      />
      <Text fontSize={theme.sizes['10']} fontWeight="bold" mt={`-${theme.sizes['1']}`}>
        {formatFiatAsset({ locale: 'en-US', amount: 1000, currency: 'USD' })}
      </Text>
    </Flex>
  );
};
