import { useClipboard, useColorMode } from '@chakra-ui/react';
import Tippy from '@tippyjs/react';
import React, { useMemo, useState } from 'react';

import { theme } from '../../modules/theme';
import { Content } from '../TooltipTutorial/Content';

export const CopyToClipboard = ({
  value,
  ...otherProps
}: {
  children: React.ReactElement;
  content: React.ReactNode;
  value: string;
}) => {
  const { colorMode } = useColorMode();

  const [visible, setVisible] = useState(false);
  const { hasCopied, onCopy } = useClipboard(value);

  // TODO: Call existing events (like onClick), if any, before we overwrite.
  const children = useMemo(() => {
    if (otherProps.children.type === React.Fragment) {
      throw new Error('Do not pass a fragment as children to `CopyToClipboard`.');
    }
    return React.cloneElement(otherProps.children, {
      onClick: onCopy,
      onMouseEnter: () => setVisible(true),
      onMouseLeave: () => setVisible(false),
    });
  }, [onCopy, otherProps.children]);

  const tippyTheme = useMemo(() => {
    if (hasCopied) return colorMode;
    return colorMode === 'dark' ? 'light' : 'dark';
  }, [colorMode, hasCopied]);

  const tippyContent = useMemo(() => {
    if (hasCopied)
      return (
        <Content
          bg={theme.colors[colorMode].bg.normal}
          color={theme.colors[colorMode].scene.success.normal}
        >
          Copied!
        </Content>
      );
    return otherProps.content;
  }, [colorMode, hasCopied, otherProps.content]);

  return (
    <Tippy
      animation={false}
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

CopyToClipboard.Content = Content;
