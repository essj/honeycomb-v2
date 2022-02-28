import {
  Input,
  InputGroup,
  InputLeftElement,
  InputProps,
  InputRightElement,
} from '@chakra-ui/react';

import { GoldLight, theme, useHoneycombColorModeValue } from '../../../modules/theme';
import { ButtonIncrement } from '../ButtonIncrement';

export type Props = InputProps & {};

export const InputGasLimit = ({ ...otherProps }: Props) => {
  const honeycomb = useHoneycombColorModeValue();

  return (
    <InputGroup>
      <InputLeftElement h="100%" ml={theme.sizes['5']}>
        <ButtonIncrement>-</ButtonIncrement>
      </InputLeftElement>
      <Input
        placeholder="placeholder"
        // TODO: chakra-ui doesn't support px when InputLeftElement/InputRightElement are used,
        pl="68px"
        pr="68px"
        size="lg"
        textAlign="center"
        type="number"
        _selection={{
          bg: honeycomb.color.primary.normal,
          color: GoldLight.honeycomb.color.text.normal,
        }}
        {...otherProps}
      />
      <InputRightElement h="100%" mr={theme.sizes['5']}>
        <ButtonIncrement>+</ButtonIncrement>
      </InputRightElement>
    </InputGroup>
  );
};
