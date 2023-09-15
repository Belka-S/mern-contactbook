import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';

import { GlobalStyle } from 'styles/GlobalStyle';

import { store, persistor } from 'store/store';
import { App } from 'components/App';

const { PUBLIC_URL } = process.env;

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    {/* <React.StrictMode> */}
    <GlobalStyle />
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename={PUBLIC_URL}>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
    {/* </React.StrictMode> */}
  </>
);
