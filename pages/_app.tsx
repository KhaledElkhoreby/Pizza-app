import { Provider } from 'react-redux';
import store from '../redux/store';

import Layout from '../components/Layout';

import '../styles/globals.scss';
import varaibles from '../styles/variables.module.scss';
import { AppProps } from 'next/app';
import { StrictMode, useEffect } from 'react';
import { useRouter } from 'next/router';
import nProgress from 'nprogress';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  useEffect(() => {
    const handleStart = (url) => {
      console.log(`Loading: ${url}`);

      nProgress.start();
    };
    const handleStop = () => {
      nProgress.done();
    };

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleStop);
    router.events.on('routeChangeError', handleStop);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleStop);
      router.events.off('routeChangeError', handleStop);
    };
  }, [router]);
  return (
    <StrictMode>
      <Provider store={store}>
        <Layout theme={varaibles}>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </StrictMode>
  );
}

export default MyApp;
