import { GoogleOAuthProvider } from '@react-oauth/google';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ReactDOM from 'react-dom/client';
import Router from './Router.tsx';

const queryClient = new QueryClient();
const clientId = import.meta.env.VITE_APP_GOOGLE_CLIENT_ID + '';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <>
    <GoogleOAuthProvider clientId={clientId}>
      <QueryClientProvider client={queryClient}>
        <Router />
      </QueryClientProvider>
    </GoogleOAuthProvider>
  </>,
);
