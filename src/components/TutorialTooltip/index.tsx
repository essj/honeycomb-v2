import { useColorMode } from '@chakra-ui/react';
import Tippy, { TippyProps } from '@tippyjs/react';
import React, { useCallback, useEffect, useMemo, useState } from 'react';

import { Content } from './Content';

export enum VisibleType {
  Dropdown = 'DROPDOWN',
  Tooltip = 'TOOLTIP',
}

export type Props = TippyProps & {
  children: React.ReactElement;
  contentDropdown?: React.ReactNode;
  contentTooltip?: React.ReactNode;
  onVisibleChange?: (value: VisibleType | null) => void;
};

export const TutorialTooltip = ({
  contentDropdown,
  contentTooltip,
  onVisibleChange,
  ...otherProps
}: Props) => {
  const { colorMode } = useColorMode();

  const [visible, setVisible] = useState<VisibleType | null>(null);
  const [timeoutHandle, setTimeoutHandle] = useState(-1);
  const [tippyContent, setTippyContent] = useState<React.ReactNode>(null);

  useEffect(() => {
    if (!onVisibleChange) return;
    onVisibleChange(visible);
  }, [onVisibleChange, visible]);

  // Do not use `useMemo` for content, otherwise tooltip content flashes on dropdown close.
  useEffect(() => {
    if (!visible) return;
    if (visible === VisibleType.Dropdown) {
      setTippyContent(contentDropdown);
      return;
    }
    setTippyContent(contentTooltip);
  }, [contentDropdown, contentTooltip, visible]);

  const tippyPlacement = useMemo((): TippyProps['placement'] => {
    if (!visible) return undefined;
    if (visible === VisibleType.Dropdown) return 'bottom';
    return 'top';
  }, [visible]);

  const tippyTheme = useMemo((): TippyProps['theme'] => {
    if (!visible) return undefined;
    if (visible === VisibleType.Dropdown) return colorMode;
    return colorMode === 'dark' ? 'light' : 'dark';
  }, [colorMode, visible]);

  const toggleDropdown = useCallback(() => {
    if (!contentDropdown) return undefined;
    if (visible === VisibleType.Dropdown) {
      setVisible(null);
      return;
    }
    setVisible(VisibleType.Dropdown);
  }, [contentDropdown, visible]);

  const mouseEnter = useCallback(() => {
    setTimeoutHandle(
      window.setTimeout(() => {
        setVisible((value) => {
          if (value === VisibleType.Dropdown) return VisibleType.Dropdown;
          return VisibleType.Tooltip;
        });
      }, 1000),
    );
  }, []);

  const mouseLeave = useCallback(() => {
    if (timeoutHandle > 0) clearTimeout(timeoutHandle);
    if (visible === VisibleType.Tooltip) {
      setVisible(null);
    }
  }, [timeoutHandle, visible]);

  // TODO: Call existing events (like onClick), if any, before we overwrite.
  const children = useMemo(() => {
    if (otherProps.children.type === React.Fragment) {
      throw new Error('Do not pass a fragment as children to `TutorialTooltip`.');
    }
    return React.cloneElement(otherProps.children, {
      onClick: toggleDropdown,
      onMouseEnter: mouseEnter,
      onMouseLeave: mouseLeave,
    });
  }, [mouseEnter, mouseLeave, otherProps.children, toggleDropdown]);

  return (
    <Tippy
      arrow
      content={tippyContent}
      interactive
      onClickOutside={toggleDropdown}
      placement={tippyPlacement}
      theme={tippyTheme}
      visible={!!visible}
      {...otherProps}
    >
      {children}
    </Tippy>
  );
};

TutorialTooltip.Content = Content;
