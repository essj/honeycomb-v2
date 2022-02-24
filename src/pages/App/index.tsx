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
  useBreakpointValue,
  useColorMode,
  useRadioGroup,
} from '@chakra-ui/react';

import { AccountAddressCopyToClipboard } from '../../components/AccountAddressCopyToClipboard';
import { CopyToClipboard } from '../../components/CopyToClipboard';
import { Dashboard } from '../../components/Dashboard';
import { Navigation } from '../../components/Navigation';
import { SelectNetwork } from '../../components/SelectNetwork';
import { Tab } from '../../components/Tab';
import { theme } from '../../modules/theme';

import { ComponentContainer } from './ComponentContainer';
import { ReactComponent as Icon } from './icon.svg';
import { ReactComponent as IconMoon } from './moon.svg';
import { ReactComponent as IconSun } from './sun.svg';

const BUTTON_VARIANTS = ['primary', 'secondary', 'outline', 'ghost'] as const;
const OPTIONS = ['BNB', 'BUSD', 'ETH'];

const App = () => {
  const margin = useBreakpointValue({ base: theme.sizes['10'], md: theme.sizes['20'] });
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
      margin={margin}
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

      <ComponentContainer h="425px">
        <Text fontSize="3xl">copy to clipboard</Text>
        <CopyToClipboard content={<Text fontSize="xs">Copy Address</Text>} value="0x0">
          <Button>copy to clipboard</Button>
        </CopyToClipboard>
        <Text fontSize="md">account address copy to clipboard</Text>
        <Text fontSize="sm">home:</Text>
        <AccountAddressCopyToClipboard
          account="Account 1"
          address="0x00000000000"
          variant="primary"
        />
        <Text fontSize="sm">receive:</Text>
        <AccountAddressCopyToClipboard
          account="Account 1"
          address="0x00000000000"
          variant="secondary"
        />
      </ComponentContainer>

      <ComponentContainer>
        <Text fontSize="3xl">dashboard</Text>
        <Dashboard />
      </ComponentContainer>

      <ComponentContainer>
        <Text fontSize="3xl">navigation</Text>
        <Navigation />
      </ComponentContainer>

      <ComponentContainer
        sx={{
          '> p:first-of-type': {
            marginBottom: theme.sizes['4'],
          },
        }}
      >
        <Text fontSize="3xl">select network</Text>
        <SelectNetwork />
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
          {OPTIONS.map((it) => {
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
