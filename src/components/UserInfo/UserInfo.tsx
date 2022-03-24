import { Avatar, Box, Typography } from '@mui/material';
import { FC } from 'react';

interface UserInfoProps {
  totalBalance: number;
  userPhotoUrl: string;
  userName: string;
}

const UserInfo: FC<UserInfoProps> = ({
  totalBalance,
  userPhotoUrl,
  userName,
}) => (
  <Box bgcolor="white" height="45px" mx={1} borderRadius="5px" display="flex">
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="45px"
      mx={1}
    >
      <Avatar
        sx={{ height: 35, width: 35 }}
        src={userPhotoUrl}
        alt={userName}
      />
    </Box>
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      width="92%"
    >
      <Typography variant="h6">HELLO {userName.toUpperCase()}</Typography>
      <Typography variant="body1">
        Your total balance is
        <span style={{ color: '#197d29' }}> {totalBalance}</span>
      </Typography>
    </Box>
  </Box>
);

export default UserInfo;
