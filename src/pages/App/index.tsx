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

import { ComponentContainer } from './ComponentContainer';
import { ReactComponent as Icon } from './icon.svg';
import { ReactComponent as IconMoon } from './moon.svg';
import { ReactComponent as IconSun } from './sun.svg';

const BUTTON_VARIANTS = ['primary', 'secondary', 'outline', 'ghost'] as const;

const App = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex
      flexDirection="column"
      margin={theme.sizes['20']}
      sx={{
        '> *:not(:last-child)': {
          marginBottom: theme.sizes['10'],
        },
      }}
    >
      <Button variant="secondary" onClick={toggleColorMode}>
        {colorMode === 'light' ? <IconMoon /> : <IconSun />}
      </Button>

      <ComponentContainer>
        <Text fontSize="3xl">button</Text>
        {BUTTON_VARIANTS.map((variant) => (
          <Button key={variant} variant={variant}>
            {variant}
          </Button>
        ))}
        <Button leftIcon={<Icon />}>with icon</Button>
        <Text fontSize="md">disabled</Text>
        {BUTTON_VARIANTS.map((variant) => (
          <Button key={`${variant}-disabled`} variant={variant} disabled>
            {variant}
          </Button>
        ))}
      </ComponentContainer>

      <ComponentContainer>
        <Text fontSize="3xl">checkbox</Text>
        <Checkbox defaultChecked>checkbox</Checkbox>
        <Checkbox>checkbox</Checkbox>
      </ComponentContainer>

      <ComponentContainer>
        <Text fontSize="3xl">radio</Text>
        <RadioGroup defaultValue="1">
          <Stack spacing={theme.sizes['4']} direction="row">
            <Radio value="1">radio</Radio>
            <Radio value="2">radio</Radio>
          </Stack>
        </RadioGroup>
      </ComponentContainer>
    </Flex>
  );
};

export default App;
