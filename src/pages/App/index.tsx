import {
  Button,
  Checkbox,
  Flex,
  HStack,
  Radio,
  RadioGroup,
  Stack,
  Switch,
  Text,
  useColorMode,
  useRadioGroup,
} from '@chakra-ui/react';

import { Tab } from '../../components/Tab';
import { theme } from '../../modules/theme';

import { ComponentContainer } from './ComponentContainer';
import { ReactComponent as Icon } from './icon.svg';
import { ReactComponent as IconMoon } from './moon.svg';
import { ReactComponent as IconSun } from './sun.svg';

const BUTTON_VARIANTS = ['primary', 'secondary', 'outline', 'ghost'] as const;

const options = ['BNB', 'BUSD', 'ETH'];
const App = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: 'tokens',
    defaultValue: 'BNB',
    onChange: console.log,
  });

  const group = getRootProps();

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

      <ComponentContainer>
        <Text fontSize="3xl">switch</Text>
        <Switch defaultChecked>switch</Switch>
        <Switch>switch</Switch>
      </ComponentContainer>

      <ComponentContainer>
        <Text fontSize="3xl">tab</Text>
        <HStack {...group}>
          {options.map((it) => {
            const radio = getRadioProps({ value: it });
            return (
              <Tab key={it} {...radio}>
                {it}
              </Tab>
            );
          })}
        </HStack>
      </ComponentContainer>
    </Flex>
  );
};

export default App;
