import { AppProps } from "next/app";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const MyApp = ({ Component, pageProps }: AppProps) => <Component {...pageProps} />;

export default MyApp;
