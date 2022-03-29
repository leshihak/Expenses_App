import { Box, Typography } from '@mui/material';
import { FC } from 'react';

const NotFound: FC = () => (
  <Box
    bgcolor="black"
    height="100vh"
    display="flex"
    alignItems="center"
    justifyContent="center"
  >
    <Typography variant="h2" color="white">
      PAGE NOT FOUND
    </Typography>
  </Box>
);

export default NotFound;
