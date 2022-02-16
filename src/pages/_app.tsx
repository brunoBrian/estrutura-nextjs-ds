import { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';

import { globalStyles } from '@/styles/global';
import { darkTheme } from '@/stitches.config';

globalStyles();

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      value={{
        light: 'light',
        dark: darkTheme
      }}
    >
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
