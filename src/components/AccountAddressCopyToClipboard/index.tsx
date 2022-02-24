import { Box, Text } from '@chakra-ui/react';
import { useMemo } from 'react';

import { GoldLight, theme, useHoneycombColorModeValue } from '../../modules/theme';
import { formatTruncatedString } from '../../modules/utils';
import { CopyToClipboard } from '../CopyToClipboard';
import { Icon } from '../Icon';

export const VARIANTS = ['primary', 'secondary'] as const;
export type Variant = typeof VARIANTS[number];

export type Props = {
  account: string;
  address: string;
  variant: Variant;
};

export const AccountAddressCopyToClipboard = ({ account, address, variant }: Props) => {
  const honeycomb = useHoneycombColorModeValue();

  const variantProps = useMemo(() => {
    if (variant === 'primary') {
      return {
        _hover: {
          bg: honeycomb.color.warning.normal,
          color: GoldLight.honeycomb.color.text.normal,
        },
      };
    }
    return {
      bg: honeycomb.color.bg.tooltip.accent,
    };
  }, [honeycomb, variant]);

  return (
    <CopyToClipboard content={<Text fontSize="xs">Copy Address</Text>} value={address}>
      <Box
        alignItems="center"
        borderRadius={theme.sizes['10']}
        cursor="default"
        display="flex"
        px={theme.sizes['4']}
        py={theme.sizes['2']}
        w="fit-content"
        {...variantProps}
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
