import { Link, Outlet } from 'react-router-dom';

import classes from './header.module.scss';

const Header = () => {
  return (
    <>
      <header className={classes.header}>
        <div>
          <Link to='/'>
            <h1>PhoneMarkt</h1>
          </Link>
        </div>
      </header>
      <Outlet />
    </>
  );
};

export default Header;
