import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Spinner from 'components/Loader';
import Header from 'components/Header';

const Layout = () => (
  <>
    <Header />
    <Suspense fallback={<Spinner />}>
      <main>
        <Outlet />
      </main>
    </Suspense>
  </>
);

export default Layout;
