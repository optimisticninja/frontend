import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import { Auth0Provider } from '@auth0/auth0-react';
import { App } from './components';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-q47yvlx5.us.auth0.com"
      clientId="DYh6yd9dRPBcEjyFf6wDYrC5fjJOQ6MG"
      redirectUri={window.location.origin}
      audience="https://localhost:8443/v1"

    >
      <App />
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
