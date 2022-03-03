import { Box, Flex, Text, useColorMode } from '@chakra-ui/react';

import { formatFiatAsset } from '../../modules/intl';
import { theme } from '../../modules/theme';
import { CopyToClipboardAccountAddress } from '../CopyToClipboardAccountAddress';
import { TooltipTutorial } from '../TooltipTutorial';

import { Actions } from './Actions';

export const Dashboard = () => {
  const { colorMode } = useColorMode();

  return (
    <Flex
      alignItems="center"
      bg={theme.colors[colorMode].scene.primary.active}
      borderRadius={theme.sizes['3']}
      color={theme.colors[colorMode].general.dark}
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
            bg={theme.colors[colorMode].general.dark}
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
      <Text
        fontSize={theme.typography.fontSizes['10']}
        fontWeight="700"
        mt={`-${theme.sizes['2']}`}
      >
        {formatFiatAsset({ locale: 'en-US', amount: 1000, currency: 'USD' })}
      </Text>
    </Flex>
  );
};
