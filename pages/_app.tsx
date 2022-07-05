import "../assets/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/ui/layout";

interface IMyApp extends AppProps {
  header: boolean;
}

function MyApp({ Component, pageProps, header, ...rest }: IMyApp) {
  return (
    <Layout {...rest}>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
