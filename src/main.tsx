import React from 'react';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import ms from 'ms';
import ReactDOM from 'react-dom/client';
import { Provider as ShoppingCartProvider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';

import { store } from './redux/store';
import router from './routes';

import '@/styles/index.css';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: ms('1h'),
      cacheTime: ms('1.5 hrs'),
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
    },
  },
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ShoppingCartProvider store={store}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <ReactQueryDevtools />
      </QueryClientProvider>
    </ShoppingCartProvider>
  </React.StrictMode>,
);
