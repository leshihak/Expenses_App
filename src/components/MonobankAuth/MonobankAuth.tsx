import { Box, Link, TextField, Button, Typography } from '@mui/material';
import { FC, useState } from 'react';

const MonobankAuth: FC = () => {
  const [tokenValue, setTokenValue] = useState('');

  const handleSubmit = () => {
    if (tokenValue.trim().length !== 0) {
      localStorage.setItem('monobankToken', tokenValue);
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
        Go to the Monobank Page and Scan QR Code for Authorization
      </Typography>
      <Typography color="white" variant="h5">
        Step 2
      </Typography>
      <Typography color="white">Scan QR Code for Authorization</Typography>
      <Typography color="white" variant="h5">
        Step 3
      </Typography>
      <Typography color="white">
        Activate your personal Token to Clipboard
      </Typography>
      <Link href="https://api.monobank.ua/" target="_blank">
        AUTH =&gt; COPY TOKEN
      </Link>
      <TextField
        variant="outlined"
        sx={{ backgroundColor: 'white' }}
        value={tokenValue}
        onChange={(event) => setTokenValue(event.target.value)}
      />
      <Button onClick={handleSubmit}>SUBMIT</Button>
    </Box>
  );
};

export default MonobankAuth;
