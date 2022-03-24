import { Box, Button, Typography } from '@mui/material';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import GoogleLogo from '../ui/Icons/GoogleLogo';

const Auth: FC = () => {
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  const navigate = useNavigate();

  const handleSignIn = () =>
    signInWithPopup(auth, googleProvider)
      .then(() => navigate('/'))
      .catch((error) => console.log(error.message));

  return (
    <Box
      height="100vh"
      bgcolor="black"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="space-between"
    >
      <Box />
      <Button variant="outlined" onClick={handleSignIn}>
        <GoogleLogo />
        <Box pl={1}>Login with Google</Box>
      </Button>
      <Box pb={3}>
        <Button fullWidth onClick={() => navigate('/about')}>
          CLICK HERE TO VIEW INFO ABOUT THE PROJECT
        </Button>
      </Box>
    </Box>
  );
};

export default Auth;
