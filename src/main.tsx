import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ReactDOM from 'react-dom/client';
import Router from './Router.tsx';
import { Suspense } from 'react';
import Loading from '@components/commons/Loading.tsx';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <>
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<Loading />}>
        <Router />
      </Suspense>
    </QueryClientProvider>
  </>
);
