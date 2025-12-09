import '../styles/globals.css';
import 'prismjs/themes/prism-tomorrow.css';

import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { UserProvider } from '../context/UserContext';

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <Component {...pageProps} />
      <Analytics />
      <SpeedInsights />
    </UserProvider>
  );
}

export default MyApp;
