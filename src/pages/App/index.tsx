import {
  Button,
  Checkbox,
  Flex,
  Radio,
  RadioGroup,
  Stack,
  Text,
  useColorMode,
} from '@chakra-ui/react';

import { theme } from '../../modules/theme';

import { ReactComponent as Icon } from './icon.svg';

export const VARIANTS = ['primary', 'secondary', 'outline'] as const;

const App = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex
      flexDirection="column"
      sx={{
        '> *:not(:last-child)': {
          marginBottom: theme.sizes['4'],
        },
      }}
    >
      <Button onClick={toggleColorMode}>Toggle {colorMode === 'light' ? 'Dark' : 'Light'}</Button>
      <Text fontSize="3xl">button</Text>
      {VARIANTS.map((variant) => (
        <Button variant={variant}>{variant}</Button>
      ))}
      <Button leftIcon={<Icon />}>with icon</Button>
      <Text fontSize="xl">disabled</Text>
      {VARIANTS.map((variant) => (
        <Button variant={variant} disabled>
          {variant}
        </Button>
      ))}

      <Text fontSize="3xl">checkbox</Text>
      <Checkbox defaultChecked>checkbox</Checkbox>
      <Checkbox>checkbox</Checkbox>

      <Text fontSize="3xl">radio</Text>
      <RadioGroup defaultValue="1">
        <Stack spacing={theme.sizes['4']} direction="row">
          <Radio value="1">radio</Radio>
          <Radio value="2">radio</Radio>
        </Stack>
      </RadioGroup>
    </Flex>
  );
};

export default App;
