## Development

`yarn start`

## Releasing to Production

`yarn deploy`

## ✨

https://essj.github.io/honeycomb-v2

## Migrating from Honeycomb v1 to v2

Because `chakra-ui` uses `emotion` + `styled-system`, there are some changes to make it compatible with our old `styled-components` theme.

### Imports
```
// old
import { useTheme } from 'styled-components';

const theme = useTheme();
console.log(theme.honeycomb.color.primary.normal); // '#f0b90b'
console.log(theme.honeycomb.size.normal); // 16

// new
import { theme, useHoneycombColorModeValue } from './modules/theme';

const honeycomb = useHoneycombColorModeValue();
console.log(honeycomb.color.primary.normal); // '#f0b90b'
console.log(theme.sizes['4']); // '16px'
```

### Size

In the new sizing system, sizes are in increments of 4px (e.g. `sizes['1']=4px`, `sizes['4']=16px`, `sizes['10']=40px`).

We are also using px instead of em for component sizing, and rem for font sizing.

```
// old
// em used for components + font sizes
<Icon width={em(theme.honeycomb.sizes.normal)} /> // 1em
<Text size="normal" /> // 1em

// new
// px used for components, rem used for font sizes
<Icon width={theme.sizes['4']} /> // 16px
<Text fontSize="md" /> // 1rem
```
