import type {AppProps} from 'next/app';
import '../style.scss';

const CustomApp = ({Component, pageProps}: AppProps) => {
  return <Component {...pageProps} />;
};

export default CustomApp;
