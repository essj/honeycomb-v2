import { ColorMode, Flex, FlexProps, useColorMode } from '@chakra-ui/react';
import { useMemo } from 'react';

import { theme } from '../../../modules/theme';

export const Content = ({
  size = 1,
  ...otherProps
}: FlexProps & {
  size?: 1 | 2;
}) => {
  const { colorMode: _colorMode } = useColorMode();

  const colorMode = useMemo((): ColorMode => {
    return _colorMode === 'dark' ? 'light' : 'dark';
  }, [_colorMode]);

  const styles = useMemo(() => {
    if (size === 2) {
      return {
        borderRadius: theme.sizes['2'],
        px: theme.sizes['4'],
        py: theme.sizes['3'],
      };
    }
    return {
      borderRadius: theme.sizes['1'],
      px: theme.sizes['3'],
      py: theme.sizes['1.5'],
    };
  }, [size]);

  return (
    <Flex
      alignItems="center"
      bg={theme.colors[colorMode].bg.normal}
      color={theme.colors[colorMode].general.normal}
      fontSize={theme.typography.fontSizes['3']}
      lineHeight={theme.typography.fontSizes['4.5']}
      {...styles}
      {...otherProps}
    />
  );
};
