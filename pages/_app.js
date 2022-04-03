import Layout from "../components/Layout";

import "../styles/globals.scss";
import varaibles from "../styles/variables.module.scss";

function MyApp({ Component, pageProps }) {
  return (
    <Layout theme={varaibles}>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
