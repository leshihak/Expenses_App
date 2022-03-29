import { createContext, useContext } from 'react';
import Loader from '../components/ui/Loader/Loader';
import { Auth, AuthProviderProps } from '../models/auth.model';
import useFirebaseAuth from './useFirebaseAuth';

const AuthContext = createContext<Auth>({
  user: null,
  loading: true,
});

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const auth = useFirebaseAuth();

  if (auth.loading) {
    return <Loader />;
  }

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
