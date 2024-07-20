import type { AppProps } from 'next/app';
import SessionWrapper from '@/components/SessionWrapper';
import { Provider } from 'react-redux';
import store from '../redux/store';



interface MyAppProps extends AppProps {
  children: React.ReactNode; 
}

function MyApp({ Component, pageProps, children }: MyAppProps) {
  return (
    <Provider store={store}>
    <div className="bg-gray-100 min-h-screen w-full">
    <SessionWrapper>
      <Component {...pageProps}>
        {children}
        </Component>
    </SessionWrapper> 
    </div>
    </Provider>
  );
}

export default MyApp;