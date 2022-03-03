import { transparentize } from 'polished';

import { ColorType } from './types';

export const light: ColorType = {
  general: {
    normal: '#1e2026',
    secondary: '#929aa5',
    masked: '#aeb4bc',
    inverted: '#ffffff',
    dark: '#1e2026',
  },
  bg: {
    normal: '#fafafa',
    secondary: '#f5f5f5',
    accent: '#e6e8ea',
    input: '#ffffff',
    masked: '#ffffff',
    inverted: '#1e2026',
    danger: transparentize(0.1, '#fdddde'),
  },
  scene: {
    border: '#caced3',
    primary: {
      normal: '#f8d12f',
      active: '#f0b90b',
    },
    success: {
      normal: '#02c076',
      active: '#2ed191',
    },
    danger: {
      normal: '#d9304e',
      active: '#f84960',
    },
    warning: {
      normal: '#f0b90b',
      active: '#f8d12f',
    },
  },
};
