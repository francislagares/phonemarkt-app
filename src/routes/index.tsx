import { createBrowserRouter } from 'react-router-dom';

import Header from '@/layouts/header';
import Home from '@/pages/home';
import Product from '@/pages/product';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Header />,
    children: [
      { index: true, element: <Home /> },
      { path: 'product/:productId', element: <Product /> },
    ],
  },
]);

export default router;
