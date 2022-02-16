import React from 'react';
import { Cross2Icon } from '@radix-ui/react-icons';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import * as C from './components/Content';
import * as S from './style';

import { Button } from './../../components';

const Dialog = () => (
  <DialogPrimitive.Root>
    <DialogPrimitive.Trigger asChild>
      <Button color="primary">Edit profile</Button>
    </DialogPrimitive.Trigger>
    <C.DialogContent>
      <S.StyledTitle>Edit profile</S.StyledTitle>
      <S.StyledDescription>
        Make changes to your profile here. Click save when you're done.
      </S.StyledDescription>
      <S.Fieldset>
        <S.Label htmlFor="name">Name</S.Label>
        <S.Input id="name" defaultValue="Pedro Duarte" />
      </S.Fieldset>
      <S.Fieldset>
        <S.Label htmlFor="username">Username</S.Label>
        <S.Input id="username" defaultValue="@peduarte" />
      </S.Fieldset>
      <S.Flex css={{ marginTop: 25, justifyContent: 'flex-end' }}>
        <DialogPrimitive.Close asChild>
          <Button aria-label="Close" color="shape">
            Save changes
          </Button>
        </DialogPrimitive.Close>
      </S.Flex>
      <DialogPrimitive.Close asChild>
        <S.IconButton>
          <Cross2Icon />
        </S.IconButton>
      </DialogPrimitive.Close>
    </C.DialogContent>
  </DialogPrimitive.Root>
);

export default Dialog;
