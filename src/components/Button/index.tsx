import { ButtonHTMLAttributes, ComponentProps, ReactNode } from 'react';

import * as S from './style';

type ButtonTypes = ButtonHTMLAttributes<HTMLButtonElement> &
  ComponentProps<typeof S['ButtonStitch']>;

export type ButtonProps = {
  children: ReactNode;
} & ButtonTypes;

export default function Button({
  children,
  radius,
  color,
  outlined,
  ...rest
}: ButtonProps) {
  return (
    <S.ButtonStitch
      type="button"
      color={color}
      radius={radius}
      outlined={outlined}
      {...rest}
    >
      {children}
    </S.ButtonStitch>
  );
}
