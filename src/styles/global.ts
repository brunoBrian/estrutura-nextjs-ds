import { globalCss } from '@/stitches.config';

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    border: `none`,
    boxSizing: `border-box`
  },

  'body, button': {
    fontFamily: `$default`
  },

  body: {
    background: `$gray3`,
    color: `$gray12`
  },

  'h1, h2, h3, h4, h5, h6': {
    color: `$gray12`,
    paddingX: '$12'
  }
});
