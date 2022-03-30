import { FC } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

const PrivateRoute: FC = () => {
  const { user } = useAuth();
  const token = localStorage.getItem('token');

  if (!user && !token) {
    return <Navigate to="/auth" />;
  }

  if (user && !token) {
    return <Navigate to="/monobank-auth" />;
  }

  return <Outlet />;
};

export default PrivateRoute;
