import App from "next/app";
import "../styles/globals.css";
import { appWithTranslation } from "../i18n";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);
  return appProps;
};

export default appWithTranslation(MyApp);
