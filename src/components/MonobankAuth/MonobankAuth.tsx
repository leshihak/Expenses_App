import { Box, Link, TextField, Button } from '@mui/material';
import { FC, useState } from 'react';

const MonobankAuth: FC = () => {
  const [tokenValue, setTokenValue] = useState('');

  const handleSubmit = () => {
    if (tokenValue.trim().length !== 0) {
      localStorage.setItem('monobankToken', tokenValue);
    }
  };

  return (
    <Box height="100vh" bgcolor="black">
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
