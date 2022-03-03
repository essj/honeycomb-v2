import { Box, Text, useColorMode } from '@chakra-ui/react';
import { useMemo } from 'react';

import { theme } from '../../modules/theme';
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

export const CopyToClipboardAccountAddress = ({ account, address, variant }: Props) => {
  const { colorMode } = useColorMode();

  const variantProps = useMemo(() => {
    if (variant === 'primary') {
      return {
        _hover: {
          bg: theme.colors[colorMode].scene.warning.normal,
          color: theme.colors[colorMode].general.dark,
        },
      };
    }
    return {
      bg: theme.colors[colorMode].bg.accent,
    };
  }, [colorMode, variant]);

  return (
    <CopyToClipboard
      content={<CopyToClipboard.Content>Copy address</CopyToClipboard.Content>}
      value={address}
    >
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
        <Text fontSize={theme.typography.fontSizes['3.5']} mr={theme.sizes['2']}>
          {account}
        </Text>
        <Text fontSize={theme.typography.fontSizes['3.5']} fontWeight="600" mr={theme.sizes['2']}>
          {formatTruncatedString({ value: address, maxCharsPerSide: 4 })}
        </Text>
        <Icon.Copy />
      </Box>
    </CopyToClipboard>
  );
};
