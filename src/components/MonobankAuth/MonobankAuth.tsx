import { Box, Link, Button, Typography } from '@mui/material';
import { FC, useState, KeyboardEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { StyledTextField } from './MonobankAuth.styled';

const MonobankAuth: FC = () => {
  const navigate = useNavigate();

  const [tokenValue, setTokenValue] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event?.code === 'Enter' && tokenValue.trim().length !== 0) {
      localStorage.setItem('token', tokenValue);
      navigate('/');
      setError('');
    } else {
      setError('Please provide not an empty Token');
    }
  };

  const handleSubmit = () => {
    if (tokenValue.trim().length !== 0) {
      localStorage.setItem('token', tokenValue);
      navigate('/');
      setError('');
    } else {
      setError('Please provide not an empty Token');
    }
  };

  return (
    <Box
      height="100vh"
      bgcolor="black"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Typography color="white" variant="h5">
        Step 1
      </Typography>
      <Typography color="white">
        Go to the{' '}
        <Link href="https://api.monobank.ua/" target="_blank">
          Monobank Page
        </Link>{' '}
        and Scan QR Code for Authorization
      </Typography>
      <Box my={3} display="flex" flexDirection="column" alignItems="center">
        <Typography color="white" variant="h5">
          Step 2
        </Typography>
        <Typography color="white">Scan QR Code for Authorization</Typography>
      </Box>
      <Typography color="white" variant="h5">
        Step 3
      </Typography>
      <Typography color="white">Copy your personal Token</Typography>
      <Box my={3} display="flex" flexDirection="column" alignItems="center">
        <Typography color="white" variant="h5">
          Step 4
        </Typography>
        <Typography color="white">
          Paste your Token to the input below
        </Typography>
      </Box>
      <StyledTextField
        autoComplete="off"
        error={Boolean(error)}
        helperText={error}
        variant="outlined"
        value={tokenValue}
        placeholder="Your Token here..."
        onChange={(event) => setTokenValue(event.target.value)}
        onKeyDown={(event) => handleKeyDown(event)}
      />
      <Box my={3} display="flex" flexDirection="column" alignItems="center">
        <Typography color="white" variant="h5">
          Step 5: Last Step
        </Typography>
        <Typography color="white">Click on Submit button below</Typography>
      </Box>
      <Button size="large" variant="outlined" onClick={handleSubmit}>
        SUBMIT
      </Button>
    </Box>
  );
};

export default MonobankAuth;
