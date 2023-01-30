import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import { CompaniesList } from './pages/companies/companies';
import { CompanyDetails } from './pages/companyDetails/companyDetails';
import { ErrorPage } from './pages/error/error';

const router = createBrowserRouter([
  {
      path: '/',
      element: <CompaniesList />,
      errorElement: <ErrorPage />
  },
  {
    path: '/details/:companyId',
    element: <CompanyDetails />
  }
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
