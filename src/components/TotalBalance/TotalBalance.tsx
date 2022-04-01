import { Avatar, Box, Typography } from '@mui/material';
import { FC } from 'react';
import { AccountInfo } from '../../models/bank.model';

interface TotalBalanceProps {
  card: AccountInfo | undefined;
  userPhotoUrl: string | null | undefined;
  userName: string | null | undefined;
}

const TotalBalance: FC<TotalBalanceProps> = ({
  card,
  userPhotoUrl,
  userName,
}) => (
  <Box bgcolor="white" borderRadius="5px" display="flex" py={1}>
    <Box display="flex" justifyContent="center" alignItems="center" mx={1}>
      {userPhotoUrl && userName && (
        <Avatar
          sx={{ width: 56, height: 56 }}
          src={userPhotoUrl}
          alt={userName}
        />
      )}
    </Box>
    <Box display="flex" flexDirection="column" alignItems="flex-start">
      <Typography variant="h6">HELLO {userName?.toUpperCase()}</Typography>
      <Typography variant="body1">
        Your total balance on main {card?.type} card is
        <span style={{ color: '#197d29', fontWeight: 'bold' }}>
          {' '}
          {(card?.balance && card?.balance / 100)?.toFixed(2)}{' '}
        </span>
        {card?.cashbackType}
      </Typography>
    </Box>
  </Box>
);

export default TotalBalance;
