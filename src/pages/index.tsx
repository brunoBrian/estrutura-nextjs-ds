import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

import { stitchStyled } from '../stitches.config';
import { Button, Dialog } from '@/components';

const Flex = stitchStyled(`div`, {
  display: `flex`,
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',

  width: '50%',
  margin: 'auto',

  background: '$shape',
  position: 'relative',
  marginTop: '16px',
  zIndex: 0,
  boxShadow: '0 6px 10px 0 rgb(0 0 0 / 25%)'
});

const Title = stitchStyled(`h1`, {
  color: '$primary-title'
});

const Paragraph = stitchStyled(`p`, {
  color: '$primary-text'
});

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const toggleTheme = () => {
    const targetTheme = resolvedTheme === 'light' ? 'dark' : 'light';

    setTheme(targetTheme);
  };

  return (
    <Flex css={{ gap: `$16`, padding: `$16` }}>
      <Title>Hello World</Title>

      <Paragraph>Olá meus amores</Paragraph>

      <Button type="button" color="primary">
        EXPERTS CLUB
      </Button>
      <Button type="button" color="shape" radius="full" onClick={toggleTheme}>
        EXPERTS CLUB 2
      </Button>
      <Button type="button" color="primary" outlined={true}>
        EXPERTS CLUB
      </Button>
      <Button
        type="button"
        color="shape"
        radius="full"
        outlined={true}
        onClick={toggleTheme}
      >
        EXPERTS CLUB 2
      </Button>

      <Dialog />
    </Flex>
  );
}
