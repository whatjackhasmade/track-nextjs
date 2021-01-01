import * as React from 'react';
import Router from 'next/router';
import NProgress from 'nprogress';
import { ThemeProvider } from 'styled-components';
import { QueryClient, QueryClientProvider } from 'react-query';

import { GlobalStyle } from 'track';
import { ThemeDefault } from 'track';

import 'normalize.css/normalize.css';
import 'nprogress/nprogress.css';

Router.events.on(`routeChangeStart`, () => NProgress.start());
Router.events.on(`routeChangeComplete`, () => NProgress.done());
Router.events.on(`routeChangeError`, () => NProgress.done());

declare type MyAppProps = {
  Component: any;
  pageProps: any;
};

const queryClient = new QueryClient();

export default function MyApp(props: MyAppProps) {
  const { Component, pageProps } = props;

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={ThemeDefault}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </QueryClientProvider>
  );
}
