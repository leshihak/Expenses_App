import { FC, useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import useToken from '../../hooks/useToken';

const PrivateRoute: FC = () => {
  const { user } = useAuth();
  const token = useToken();

  const redirectToMonobankAuth = (): any => <Navigate to="/monobank-auth" />;

  useEffect(() => {
    if (user && !token) {
      return redirectToMonobankAuth();
    }
  }, [token, user]);

  if (!user && !token) {
    return <Navigate to="/auth" />;
  }

  // if (user && !token) {
  //   console.log('user && !token');
  //   return <Navigate to="/monobank-auth" />;
  // }

  return <Outlet />;
};

export default PrivateRoute;
