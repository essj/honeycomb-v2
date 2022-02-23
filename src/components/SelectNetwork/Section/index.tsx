import {
  Accordion,
  AccordionButton,
  AccordionButtonProps,
  AccordionItem,
  AccordionPanel,
  AccordionProps,
  Box,
  Text,
} from '@chakra-ui/react';
import React, { useState } from 'react';

import { theme, useHoneycombColorModeValue } from '../../../modules/theme';
import { Icon } from '../../Icon';

export type Props = {
  accordionProps?: AccordionProps;
  accordionButtonProps?: AccordionButtonProps;
  networks: string[];
  title: React.ReactNode;
};

export const Section = ({ accordionProps, accordionButtonProps, networks, title }: Props) => {
  const honeycomb = useHoneycombColorModeValue();

  const [expandedIndex, setExpandedIndex] = useState(accordionProps?.defaultIndex ?? 0);

  return (
    <Accordion
      allowToggle
      onChange={(value) => setExpandedIndex(value as number)}
      {...accordionProps}
    >
      <AccordionItem border="none">
        <AccordionButton
          fontSize="xs"
          justifyContent="center"
          py="0"
          _focus={{
            boxShadow: 'none',
          }}
          {...accordionButtonProps}
        >
          <Box alignItems="center" display="flex">
            <Text mr={theme.sizes['2']}>{title}</Text>
            {expandedIndex !== -1 ? <Icon.CaretUp /> : <Icon.CaretDown />}
          </Box>
        </AccordionButton>
        {networks.map((it) => (
          <AccordionPanel
            alignItems="center"
            display="flex"
            h="71px"
            key={it}
            p={theme.sizes['4']}
            _hover={{
              bg: honeycomb.color.bg.input.normal,
              cursor: 'pointer',
            }}
          >
            {it}
          </AccordionPanel>
        ))}
      </AccordionItem>
    </Accordion>
  );
};
