import { ReactNode } from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';

import * as S from './style';

type DialogContentProps = {
  children: ReactNode;
};

export function DialogContent({ children, ...props }: DialogContentProps) {
  return (
    <DialogPrimitive.Portal>
      <S.StyledOverlay />
      <S.StyledContent {...props}>{children}</S.StyledContent>
    </DialogPrimitive.Portal>
  );
}
