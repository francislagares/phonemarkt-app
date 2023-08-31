import { useSelector } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';

import Breadcrumbs from '@/components/breadcrumbs';
import { CartIcon } from '@/components/cart';
import { RootState } from '@/redux/store';

import classes from './header.module.scss';

const Header = () => {
  const { cartItems } = useSelector((store: RootState) => store.cart);

  return (
    <>
      <header className={classes.header}>
        <div className={classes.logoAndBreadcrumbs}>
          <Link to='/'>
            <h1>PhoneMarkt</h1>
          </Link>
          <Breadcrumbs />
        </div>
        <CartIcon cartQty={cartItems.length} />
      </header>
      <Outlet />
    </>
  );
};

export default Header;
