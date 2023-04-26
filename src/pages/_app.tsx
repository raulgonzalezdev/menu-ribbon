import React, { useState } from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import './App.css';

const ClientComponent = React.lazy(
  () => import('../components/ClientComponent')
);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <React.Suspense fallback={<div>Loading...</div>}>
        <ClientComponent>
          <Component {...pageProps} />
        </ClientComponent>
      </React.Suspense>
    </ChakraProvider>
  );
}

export default MyApp;
