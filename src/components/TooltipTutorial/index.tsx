import { useColorMode } from '@chakra-ui/react';
import Tippy, { TippyProps } from '@tippyjs/react';
import React, { useCallback, useEffect, useMemo, useState } from 'react';

import { Content } from './Content';

export enum VisibleType {
  Dropdown = 'DROPDOWN',
  Tooltip = 'TOOLTIP',
}

type Props = TippyProps & {
  children: React.ReactElement;
  contentDropdown?: React.ReactNode;
  contentTooltip?: React.ReactNode;
  onVisibleChange?: (value: VisibleType | null) => void;
};

export const TooltipTutorial = ({
  contentDropdown,
  contentTooltip,
  onVisibleChange,
  ...otherProps
}: Props) => {
  const { colorMode } = useColorMode();

  const [visible, setVisible] = useState<VisibleType | null>(null);
  const [timeoutHandle, setTimeoutHandle] = useState(-1);
  const [tippyState, setTippyState] = useState<{
    content: TippyProps['content'];
    placement: TippyProps['placement'];
    theme: TippyProps['theme'];
  } | null>(null);

  useEffect(() => {
    if (!onVisibleChange) return;
    onVisibleChange(visible);
  }, [onVisibleChange, visible]);

  // Do not use `useMemo` for content, otherwise tooltip content flashes on dropdown close.
  useEffect(() => {
    if (!visible) return;
    if (visible === VisibleType.Dropdown) {
      setTippyState({
        content: contentDropdown,
        placement: 'bottom',
        theme: colorMode,
      });
      return;
    }
    setTippyState({
      content: contentTooltip,
      placement: 'top',
      theme: colorMode === 'dark' ? 'light' : 'dark',
    });
  }, [colorMode, contentDropdown, contentTooltip, visible]);

  const close = useCallback(() => {
    setVisible(null);
    setTippyState(null);
  }, []);

  const toggleDropdown = useCallback(() => {
    if (!contentDropdown) return undefined;
    if (visible === VisibleType.Dropdown) {
      close();
      return;
    }
    setVisible(VisibleType.Dropdown);
  }, [close, contentDropdown, visible]);

  const mouseEnter = useCallback(() => {
    setTimeoutHandle(
      window.setTimeout(() => {
        setVisible((value) => {
          if (value === VisibleType.Dropdown) return VisibleType.Dropdown;
          return VisibleType.Tooltip;
        });
      }, 500),
    );
  }, []);

  const mouseLeave = useCallback(() => {
    if (timeoutHandle > 0) clearTimeout(timeoutHandle);
    if (visible === VisibleType.Tooltip) {
      close();
    }
  }, [close, timeoutHandle, visible]);

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
      animation={false}
      arrow
      interactive
      onClickOutside={toggleDropdown}
      visible={!!visible}
      {...tippyState}
      {...otherProps}
    >
      {children}
    </Tippy>
  );
};

TooltipTutorial.Content = Content;
