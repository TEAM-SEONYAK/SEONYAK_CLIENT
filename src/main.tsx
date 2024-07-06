import { GoogleOAuthProvider } from '@react-oauth/google';
import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './Router.tsx';

const clientId = import.meta.env.VITE_APP_GOOGLE_CLIENT_ID + '';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId={clientId}>
      <Router />
    </GoogleOAuthProvider>
  </React.StrictMode>,
);
