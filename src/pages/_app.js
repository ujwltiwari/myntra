import '@/styles/globals.css';
import { ApolloProvider } from '@apollo/client';
import client from '../../apollo';
import { Provider } from 'react-redux';
import { persistor, store } from '@/redux/store';
// import { persistor, store } from './redux/store';

import { PersistGate } from 'redux-persist/integration/react';

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ApolloProvider client={client}>
          <Component {...pageProps} />
        </ApolloProvider>
      </PersistGate>
    </Provider>
  );
}
