import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../components/Layout';
import { AnimatePresence } from 'framer-motion';

// Fix for 'wait' mode type issue
interface MyAppProps extends AppProps {
  // Add any additional props here if needed
}

function MyApp({ Component, pageProps, router }: MyAppProps) {
  return (
    <Layout>
      <AnimatePresence mode="wait" initial={false}>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </Layout>
  );
}

export default MyApp;
