import { ReactNode } from 'react';

export interface AuthUserProviderProps {
  children: ReactNode;
}

export interface User {
  uid: string;
  email: string | null;
  displayName: string | null;
  photoURL: string | null;
}

export interface AuthUser {
  user: User | null;
  loading: boolean;
}
