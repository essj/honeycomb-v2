import { transparentize } from 'polished';

export const dark = {
  general: {
    normal: '#e6e8ea',
    secondary: '#76808f',
    masked: '#5e6673',
    inverted: '#14151a',
    dark: '#1e2026',
  },
  bg: {
    normal: '#1e2026',
    secondary: '#23262c',
    accent: '#2b2f36',
    input: '#14151a',
    masked: '#0b0e11',
    inverted: '#ffffff',
    danger: transparentize(0.1, '#330911'),
  },
  scene: {
    border: '#76808f',
    primary: {
      normal: '#f0b90b',
      active: '#f8d12f',
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
