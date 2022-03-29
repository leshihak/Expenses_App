import { getApps, getApp } from 'firebase/app';
import { useEffect, useState } from 'react';
import { BrowserRouter, Navigate, useRoutes } from 'react-router-dom';
import About from './components/About/About';
import Auth from './components/Auth/Auth';
import Currency from './components/Currency/Currency';
import Dashboard from './components/Dashboard/Dashboard';
import MonobankAuth from './components/MonobankAuth/MonobankAuth';
import StatementList from './components/StatementList/StatementList';
import { app } from './config/firebase';
import { AuthUserProvider, useAuth } from './hooks/useAuth';
import useMonobankToken from './hooks/useMonobankAuth';

getApps().length === 0 ? app : getApp();

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isUser, setIsUser] = useState(false);

  const { user } = useAuth();
  const token = useMonobankToken();

  useEffect(() => {
    setIsAuthenticated(Boolean(user) && Boolean(token));
    setIsUser(Boolean(user) && !token);
  }, [user, token]);

  // const isAuthenticated = Boolean(user) && Boolean(token);
  // const isUser = Boolean(user) && !token;

  console.log(isAuthenticated, isUser, user, token);

  const routes = useRoutes([
    {
      path: '/',
      element: isAuthenticated ? (
        <Dashboard />
      ) : isUser ? (
        <Navigate to="/monobank-auth" />
      ) : (
        <Navigate to="/auth" />
      ),
      children: [
        { path: '/currency', element: <Currency /> },
        { path: '/statement', element: <StatementList /> },
      ],
    },
    { path: '/auth', element: <Auth /> },
    {
      path: '/monobank-auth',
      element: isUser ? <MonobankAuth /> : <Navigate to="/auth" />,
    },
    { path: '/about', element: <About /> },
  ]);

  return routes;
};

const AppWrapper = () => {
  return (
    <AuthUserProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthUserProvider>
  );
};

export default AppWrapper;
