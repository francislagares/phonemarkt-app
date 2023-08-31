import { Link, createBrowserRouter } from 'react-router-dom';

import Header from '@/layouts/header';
import Home from '@/pages/home';
import Product from '@/pages/product';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Header />,
    handle: {
      crumb: () => <Link to='/'>Home</Link>,
    },
    children: [
      { index: true, element: <Home /> },
      {
        path: 'product/:productId',
        element: <Product />,
        handle: { crumb: () => 'Product' },
      },
    ],
  },
]);

export default router;
