import { Box, ChakraProps, Text } from '@chakra-ui/react';

import { theme } from '../../modules/theme';
import { formatTruncatedString } from '../../modules/utils';
import { CopyToClipboard } from '../CopyToClipboard';
import { Icon } from '../Icon';

export type Props = {
  account: string;
  address: string;
  boxProps?: ChakraProps;
};

export const AccountAddressCopyToClipboard = ({ account, address, boxProps }: Props) => {
  return (
    <CopyToClipboard content={<Text fontSize="xs">Copy Address</Text>} value={address}>
      <Box
        alignItems="center"
        borderRadius={theme.sizes['10']}
        cursor="default"
        display="flex"
        w="fit-content"
        {...boxProps}
      >
        <Text fontSize="sm" mr={theme.sizes['2']}>
          {account}
        </Text>
        <Text fontSize="sm" fontWeight="semibold" mr={theme.sizes['2']}>
          {formatTruncatedString({ value: address, maxCharsPerSide: 4 })}
        </Text>
        <Icon.Copy />
      </Box>
    </CopyToClipboard>
  );
};
