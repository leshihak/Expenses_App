import { Box } from '@mui/material';
import { FC, useEffect, useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import useMonobankToken from '../../hooks/useMonobankAuth';
import { AccountInfo } from '../../models/bank.model';
import { getBankData } from '../../services/bank.service';
import Card from '../Card/Card';
import Drawer from '../ui/Drawer/Drawer';
import UserInfo from '../UserInfo/UserInfo';

const DUMMY_INFO = {
  totalBalance: 400,
};

const Dashboard: FC = () => {
  const { user } = useAuth();
  const token = useMonobankToken();

  const [clientAccounts, setClientAccounts] = useState<AccountInfo[]>([]);

  useEffect(() => {
    if (token) {
      getBankData(token)
        .then((result) => {
          const { data } = result;
          setClientAccounts(data.accounts);
        })
        .catch((error) => console.log(error));
    }
  }, [token]);

  return (
    <Drawer>
      <UserInfo
        totalBalance={DUMMY_INFO.totalBalance}
        userPhotoUrl={user?.photoURL}
        userName={user?.displayName}
      />
      <Box display="flex" justifyContent="space-between" flexWrap="wrap">
        {clientAccounts?.map((account) => (
          <Card data={account} key={account.id} />
        ))}
      </Box>
    </Drawer>
  );
};

export default Dashboard;
