import { useEffect, useState } from 'react';

import type { AppProps } from 'next/app';
import { CssBaseline, Theme, ThemeProvider } from '@mui/material';
import JSCookie from 'js-cookie';

import { lightTheme } from '@/themes';
import { SELECTED_THEME_DEFINITION } from '@/themes/constants';
import '@/styles/globals.css';

interface AppPropsWithTheme extends AppProps {
  theme: string;
}

export default function App({ Component, pageProps }: AppPropsWithTheme) {
  const [currentTheme, setCurrentTheme] = useState(lightTheme);

  useEffect(() => {
    const themeName = JSCookie.get('theme') ?? 'light';
    const selectedTheme: Theme = SELECTED_THEME_DEFINITION[themeName];
    setCurrentTheme(selectedTheme);
  }, []);

  return (
    <ThemeProvider theme={currentTheme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

// getInitialProps will disable Automatic Static Optimization.
// App.getInitialProps = async ({ ctx }: AppContext) => {
//   const { theme } = ctx.req?.cookies ?? { theme: 'light' };
//   return {
//     theme: VALID_THEMES.includes(theme) ? theme : 'light'
//   };
// };
