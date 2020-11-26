import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App';
// import * as serviceWorker from './serviceWorker';

import { ApolloProvider } from '@apollo/client';
import client from './apollo';

ReactDOM.render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ApolloProvider>,

  document.getElementById('root')
);

// serviceWorker.unregister();
