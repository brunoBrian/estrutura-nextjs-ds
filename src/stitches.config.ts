import { createStitches, ScaleValue } from '@stitches/react';
import { transparentize } from 'polished';

import {
  red,
  gray,
  green,
  purple,
  yellow,
  grayDark,
  crimson,
  crimsonDark,
  purpleDark
} from '@radix-ui/colors';

const convertToRem = (value: number) => `${value / 16}rem`;

const space = {
  0: 0,
  2: convertToRem(2),
  4: convertToRem(4),
  6: convertToRem(6),
  8: convertToRem(8),
  10: convertToRem(10),
  12: convertToRem(12),
  14: convertToRem(14),
  16: convertToRem(16),
  18: convertToRem(18),
  20: convertToRem(20),
  22: convertToRem(22),
  24: convertToRem(24),
  26: convertToRem(26),
  28: convertToRem(28),
  30: convertToRem(30)
};

export const {
  styled: stitchStyled,
  getCssText,
  globalCss,
  keyframes,
  createTheme
} = createStitches({
  media: {
    sm: '(min-width: 380px)',
    md: '(min-width: 768px)',
    lg: '(min-width: 1024px)'
  },
  theme: {
    colors: {
      ...gray,
      ...purple,
      ...green,
      ...yellow,
      ...red,
      ...crimson,

      accent1: '$blue1',
      accent2: '$blue2',
      info1: '$blue1',
      info2: '$blue2',

      success1: '$green1',
      success2: '$green2',
      valid1: '$green1',
      valid2: '$green2',

      warning1: '$yellow1',
      warning2: '$yellow2',
      pending1: '$yellow1',
      pending2: '$yellow2',

      white: '#fff'
    },
    space,
    radii: {
      full: `99999px`,
      default: `5px`,
      none: '0'
    },
    fonts: {
      default: `Roboto`
    },
    fontSizes: {
      xs: '0.75rem',
      sm: '0.875rem',
      md: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '3.75rem',
      '7xl': '4.5rem',
      '8xl': '6rem',
      '9xl': '8rem'
    },
    fontWeights: {
      hairline: 100,
      thin: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900
    },
    lineHeights: {
      normal: 'normal',
      none: 1,
      shorter: 1.25,
      short: 1.375,
      base: 1.5,
      tall: 1.625,
      taller: '2',
      '3': '.75rem',
      '4': '1rem',
      '5': '1.25rem',
      '6': '1.5rem',
      '7': '1.75rem',
      '8': '2rem',
      '9': '2.25rem',
      '10': '2.5rem'
    },
    letterSpacings: {
      tighter: '-0.05em',
      tight: '-0.025em',
      normal: '0',
      wide: '0.025em',
      wider: '0.05em',
      widest: '0.1em'
    },
    sizes: {
      max: 'max-content',
      min: 'min-content',
      full: '100%',
      ...space
    },
    transitions: {
      slow: '0.5s ease-in-out',
      default: '0.3s ease-in-out',
      fast: '0.1s ease-in-out'
    },
    shadows: {
      default: `0.1rem 0.1rem 0.8rem ${transparentize(0.9, '#000')}`,
      hover: `0.1rem 0.1rem 0.8rem ${transparentize(0.8, '#000')}`
    }
  },
  utils: {
    paddingX: (value: ScaleValue<'space'>) => ({
      paddingLeft: value,
      paddingRight: value
    }),
    paddingY: (value: ScaleValue<'space'>) => ({
      paddingTop: value,
      paddingBottom: value
    })
  },
  prefix: 'amedigital'
});

export const scaleUp = keyframes({
  '0%': { transform: 'scale(1)' },
  '100%': { transform: 'scale(1.5)' }
});

export const darkTheme = createTheme('dark', {
  colors: {
    ...grayDark,
    ...purpleDark,
    ...crimsonDark
  }
});
