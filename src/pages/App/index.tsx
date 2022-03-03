import {
  Button,
  Checkbox,
  Flex,
  HStack,
  Input,
  Radio,
  RadioGroup,
  Stack,
  Switch,
  Text,
  useBreakpointValue,
  useColorMode,
  useRadioGroup,
} from '@chakra-ui/react';

import { CopyToClipboardAccountAddress } from '../../components/CopyToClipboardAccountAddress';
import { CopyToClipboard } from '../../components/CopyToClipboard';
import { Dashboard } from '../../components/Dashboard';
import { InputGasLimit } from '../../components/Gas';
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
        <Text fontSize={theme.typography.fontSizes['8']}>button</Text>
        {BUTTON_VARIANTS.map((variant) => (
          <Button key={variant} variant={variant}>
            {variant}
          </Button>
        ))}
        <Button leftIcon={<Icon />}>with icon</Button>
        <Text fontSize={theme.typography.fontSizes['4']}>disabled</Text>
        {BUTTON_VARIANTS.map((variant) => (
          <Button key={`${variant}-disabled`} variant={variant} disabled>
            {variant}
          </Button>
        ))}
      </ComponentContainer>

      <ComponentContainer>
        <Text fontSize={theme.typography.fontSizes['8']}>checkbox</Text>
        <Checkbox defaultChecked>checkbox</Checkbox>
        <Checkbox>checkbox</Checkbox>
      </ComponentContainer>

      <ComponentContainer h="425px">
        <Text fontSize={theme.typography.fontSizes['8']}>copy to clipboard</Text>
        <CopyToClipboard
          content={<CopyToClipboard.Content>Copy address</CopyToClipboard.Content>}
          value="0x0"
        >
          <Button>copy to clipboard</Button>
        </CopyToClipboard>
        <Text fontSize={theme.typography.fontSizes['4']}>copy to clipboard account address</Text>
        <Text fontSize={theme.typography.fontSizes['3.5']}>home:</Text>
        <CopyToClipboardAccountAddress
          account="Account 1"
          address="0x00000000000"
          variant="primary"
        />
        <Text fontSize={theme.typography.fontSizes['3.5']}>receive:</Text>
        <CopyToClipboardAccountAddress
          account="Account 1"
          address="0x00000000000"
          variant="secondary"
        />
      </ComponentContainer>

      <ComponentContainer>
        <Text fontSize={theme.typography.fontSizes['8']}>dashboard</Text>
        <Dashboard />
      </ComponentContainer>

      <ComponentContainer>
        <Text fontSize={theme.typography.fontSizes['8']}>input</Text>
        <Input />
        <Input isDisabled placeholder="disabled" />
        <Input isInvalid placeholder="invalid" />
        <Text fontSize={theme.typography.fontSizes['3.5']}>gas limit</Text>
        <InputGasLimit />
      </ComponentContainer>

      <ComponentContainer>
        <Text fontSize={theme.typography.fontSizes['8']}>navigation</Text>
        <Navigation />
      </ComponentContainer>

      <ComponentContainer
        sx={{
          '> p:first-of-type': {
            marginBottom: theme.sizes['4'],
          },
        }}
      >
        <Text fontSize={theme.typography.fontSizes['8']}>select network</Text>
        <SelectNetwork />
      </ComponentContainer>

      <ComponentContainer>
        <Text fontSize={theme.typography.fontSizes['8']}>radio</Text>
        <RadioGroup defaultValue="1">
          <Stack spacing={theme.sizes['4']} direction="row">
            <Radio value="1">radio</Radio>
            <Radio value="2">radio</Radio>
          </Stack>
        </RadioGroup>
      </ComponentContainer>

      <ComponentContainer>
        <Text fontSize={theme.typography.fontSizes['8']}>switch</Text>
        <Switch defaultChecked>switch</Switch>
        <Switch>switch</Switch>
      </ComponentContainer>

      <ComponentContainer>
        <Text fontSize={theme.typography.fontSizes['8']}>tab</Text>
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
