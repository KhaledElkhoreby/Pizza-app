import { Provider } from "react-redux";
import store from "../redux/store";

import Layout from "../components/Layout";

import "../styles/globals.scss";
import varaibles from "../styles/variables.module.scss";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout theme={varaibles}>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
