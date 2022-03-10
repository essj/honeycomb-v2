import { Flex, FlexProps } from '@chakra-ui/react';

import { theme } from '../../modules/theme';
import { Divider } from './Divider';
import { Step } from './Step';

export const Steps = (props: FlexProps) => {
  return <Flex alignItems="center" mb={theme.sizes['6']} {...props} />;
};

Steps.Divider = Divider;
Steps.Step = Step;
