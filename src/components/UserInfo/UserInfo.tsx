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
  <Box bgcolor="white" borderRadius="5px" display="flex" py={1}>
    <Box display="flex" justifyContent="center" alignItems="center" mx={1}>
      <Avatar
        sx={{ width: 56, height: 56 }}
        src={userPhotoUrl}
        alt={userName}
      />
    </Box>
    <Box display="flex" flexDirection="column" alignItems="flex-start">
      <Typography variant="h6">HELLO {userName.toUpperCase()}</Typography>
      <Typography variant="body1">
        Your total balance is
        <span style={{ color: '#197d29' }}> {totalBalance} </span>
        UAH
      </Typography>
    </Box>
  </Box>
);

export default UserInfo;
