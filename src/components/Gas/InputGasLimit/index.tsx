import {
  Input,
  InputGroup,
  InputLeftElement,
  InputProps,
  InputRightElement,
  useColorMode,
} from '@chakra-ui/react';

import { theme } from '../../../modules/theme';
import { ButtonIncrement } from '../ButtonIncrement';

export type Props = InputProps & {};

export const InputGasLimit = ({ ...otherProps }: Props) => {
  const { colorMode } = useColorMode();

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
          bg: theme.colors[colorMode].scene.primary.normal,
          color: theme.colors[colorMode].general.dark,
        }}
        {...otherProps}
      />
      <InputRightElement h="100%" mr={theme.sizes['5']}>
        <ButtonIncrement>+</ButtonIncrement>
      </InputRightElement>
    </InputGroup>
  );
};
