import { HStack, useRadioGroup } from '@chakra-ui/react';
import { useState } from 'react';

import { theme } from '../../modules/theme';

import { ReactComponent as IconHistory } from './history.svg';
import { ReactComponent as IconHome } from './home.svg';
import { Item } from './Item';
import { ReactComponent as IconNft } from './nft.svg';
import { ReactComponent as IconSwap } from './swap.svg';

const OPTIONS = ['home', 'nft', 'swap', 'history'] as const;
type Option = typeof OPTIONS[number];

export const Navigation = () => {
  const [active, setActive] = useState<Option>(OPTIONS[0]);

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: 'navigation',
    defaultValue: active,
    onChange: (value: Option) => setActive(value),
  });
  const group = getRootProps();

  return (
    <HStack spacing={theme.sizes['6']} {...group}>
      <Item {...getRadioProps({ value: 'home' })}>
        <IconHome />
      </Item>
      <Item {...getRadioProps({ value: 'nft' })}>
        <IconNft />
      </Item>
      <Item {...getRadioProps({ value: 'swap' })}>
        <IconSwap />
      </Item>
      <Item {...getRadioProps({ value: 'history' })}>
        <IconHistory />
      </Item>
    </HStack>
  );
};
