import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import AuthProvider from './Providers/AuthProvider';
import { router } from './Routers/routes';

// Create a new instance of QueryClient
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Wrap the application with AuthProvider for authentication */}
    <AuthProvider>
      {/* Wrap the application with HelmetProvider for managing document head tags */}
      <HelmetProvider>
        {/* Wrap the application with QueryClientProvider and provide the queryClient */}
        <QueryClientProvider client={queryClient}>
          {/* Create a container div with a maximum width */}
          <div className="max-w-screen-xl mx-auto">
            {/* Provide the router instance to the RouterProvider */}
            <RouterProvider router={router} />
          </div>
        </QueryClientProvider>
      </HelmetProvider>
    </AuthProvider>
  </React.StrictMode>
);
