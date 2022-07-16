import { Provider } from 'react-redux';
import store from '../redux/store';

import Layout from '../components/Layout';

import '../styles/globals.scss';
import varaibles from '../styles/variables.module.scss';
import { AppProps } from 'next/app';
import { StrictMode } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
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
