import { useEffect, useState } from 'react';

const useMonobankToken = (): string | null => {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const monobankToken = localStorage.getItem('monobankToken');

    if (monobankToken) {
      setToken(monobankToken);
    }
  }, []);

  return token;
};

export default useMonobankToken;
