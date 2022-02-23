import { Text, useClipboard, useColorMode } from '@chakra-ui/react';
import Tippy from '@tippyjs/react';
import React, { useMemo, useState } from 'react';

import { useHoneycombColorModeValue } from '../../modules/theme';

export const CopyToClipboard = ({
  value,
  ...otherProps
}: {
  children: React.ReactElement;
  content: React.ReactNode;
  value: string;
}) => {
  const { colorMode } = useColorMode();
  const honeycomb = useHoneycombColorModeValue();

  const [visible, setVisible] = useState(false);
  const { hasCopied, onCopy } = useClipboard(value);

  const children = useMemo(() => {
    if (otherProps.children.type === React.Fragment) {
      throw new Error('Do not pass a fragment as children to `CopyToClipboard`.');
    }
    return React.cloneElement(otherProps.children, {
      onClick: onCopy,
      onMouseOver: () => setVisible(true),
      onMouseOut: () => setVisible(false),
    });
  }, [onCopy, otherProps.children]);

  const tippyTheme = useMemo(() => {
    if (hasCopied) return colorMode;
    return colorMode === 'dark' ? 'light' : 'dark';
  }, [colorMode, hasCopied]);

  const tippyContent = useMemo(() => {
    if (hasCopied)
      return (
        <Text color={honeycomb.color.success.normal} fontSize="xs">
          Copied!
        </Text>
      );
    return otherProps.content;
  }, [hasCopied, honeycomb.color.success, otherProps.content]);

  return (
    <Tippy
      arrow
      content={tippyContent}
      interactive
      onClickOutside={() => setVisible(false)}
      placement="top"
      theme={tippyTheme}
      visible={visible}
    >
      {children}
    </Tippy>
  );
};
