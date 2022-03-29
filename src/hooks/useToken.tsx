import { useEffect, useState } from 'react';

const useToken = (): string | null => {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      setToken(token);
    }
  }, []);

  return token;
};

export default useToken;
