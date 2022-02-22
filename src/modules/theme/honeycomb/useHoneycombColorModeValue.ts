import { useColorModeValue } from '@chakra-ui/react';

import { GoldDark } from './GoldDark';
import { GoldLight } from './GoldLight';

export const useHoneycombColorModeValue = () => useColorModeValue(GoldLight, GoldDark).honeycomb;
