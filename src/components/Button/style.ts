import { stitchStyled } from '@/stitches.config';

export const ButtonStitch = stitchStyled(`button`, {
  border: 0,
  appearance: `none`,
  cursor: `pointer`,

  transition: `$default`,
  fontWeight: `bold`,

  width: '100%',

  // Media query
  '@lg': {
    width: 'auto'
  },

  '&:hover': {
    filter: `brightness(0.9)`
  },

  $$shadowColor: ``,

  variants: {
    color: {
      primary: {
        backgroundColor: `$purple11`,
        color: `$purple1`
      },
      shape: {
        backgroundColor: `$crimson10`,
        color: `$crimson1`
      }
    },
    size: {
      small: {
        padding: `$18`
      },
      full: {
        flex: 1,
        width: '100%',
        padding: `$22`
      }
    },
    radius: {
      default: {
        borderRadius: `$default`
      },
      full: {
        borderRadius: `$full`
      }
    },
    outlined: {
      true: {
        boxShadow: `0px 0px 0 2px $$shadowColor`,
        backgroundColor: `transparent`
      }
    }
  },

  // condição: aplica o css se a color for a selecionada e outlined for true
  compoundVariants: [
    {
      color: `primary`,
      outlined: true,
      css: {
        $$shadowColor: `$colors$purple10`,
        color: '$colors$purple10',

        '&:hover': {
          filter: `brightness(1.5)`
        }
      }
    },
    {
      color: `shape`,
      outlined: true,
      css: {
        $$shadowColor: `$colors$crimson10`,
        color: '$colors$crimson10',

        '&:hover': {
          filter: `brightness(1.5)`
        }
      }
    }
  ],

  defaultVariants: {
    color: `primary`,
    size: `small`,
    radius: `default`,
    outlined: false
  }
});
