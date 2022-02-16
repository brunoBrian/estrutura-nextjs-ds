import * as DialogPrimitive from '@radix-ui/react-dialog';

import { stitchStyled } from '@/stitches.config';

export const StyledTitle = stitchStyled(DialogPrimitive.Title, {
  margin: 0,
  padding: 0,
  fontWeight: '$extrabold',
  color: '$gray12',
  fontSize: '$lg'
});

export const StyledDescription = stitchStyled(DialogPrimitive.Description, {
  margin: '10px 0 20px',
  color: '$gray11',
  fontSize: '$md',
  lineHeight: '$short'
});

export const Flex = stitchStyled('div', { display: 'flex' });
export const Box = stitchStyled('div', {});

export const IconButton = stitchStyled('button', {
  all: 'unset',
  fontFamily: 'inherit',
  borderRadius: '100%',
  height: 25,
  width: 25,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '$purple11',
  position: 'absolute',
  top: 10,
  right: 10,

  '&:hover': { backgroundColor: '$purple4' },
  '&:focus': { boxShadow: `0 0 0 2px ${'$purple7'}` }
});

export const Fieldset = stitchStyled('fieldset', {
  all: 'unset',
  display: 'flex',
  gap: 20,
  alignItems: 'center',
  marginBottom: 15
});

export const Label = stitchStyled('label', {
  fontSize: '$md',
  color: '$purple11',
  width: 90,
  textAlign: 'right'
});

export const Input = stitchStyled('input', {
  all: 'unset',
  width: '100%',
  flex: '1',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '$default',
  padding: '0 10px',
  fontSize: '$md',
  lineHeight: 1,
  color: '$purple11',
  boxShadow: `0 0 0 1px $colors$purple6`,
  height: 35,

  '&:focus': { boxShadow: `0 0 0 2px $colors$purple7` }
});
