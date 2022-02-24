import { Flex } from '@chakra-ui/react';
import { useState } from 'react';

import { theme, useHoneycombColorModeValue } from '../../../modules/theme';
import { Icon } from '../../Icon';
import { TutorialTooltip, VisibleType } from '../../TutorialTooltip';

export const Actions = () => {
  const honeycomb = useHoneycombColorModeValue();

  const [visible, setVisible] = useState<VisibleType | null>(null);

  return (
    <TutorialTooltip
      contentTooltip="Account options"
      contentDropdown=""
      onVisibleChange={setVisible}
    >
      <Flex
        alignItems="center"
        bg={!!visible ? honeycomb.color.warning.normal : 'none'}
        borderRadius="50%"
        h={theme.sizes['6']}
        justifyContent="center"
        w={theme.sizes['6']}
        _hover={{ bg: honeycomb.color.warning.normal }}
      >
        <Icon.Ellipsis />
      </Flex>
    </TutorialTooltip>
  );
};
