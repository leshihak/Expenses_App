import { Box, Grid } from '@mui/material';
import { FC, useEffect, useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import useToken from '../../hooks/useToken';
import CurrencyCode from 'currency-codes';
import { AccountInfo } from '../../models/bank.model';
import { getBankData } from '../../services/bank.service';
import Card from '../Card/Card';
import Drawer from '../ui/Drawer/Drawer';
import TotalBalance from '../TotalBalance/TotalBalance';
import Loader from '../ui/Loader/Loader';

const Dashboard: FC = () => {
  const { user } = useAuth();
  const token = useToken();

  const [clientAccounts, setClientAccounts] = useState<AccountInfo[] | null>(
    null
  );

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

  if (!clientAccounts) {
    return <Loader />;
  }

  const mainAccount = clientAccounts.find(
    (account) =>
      account.sendId &&
      account.cashbackType &&
      CurrencyCode.number(account.currencyCode.toString())?.code === 'UAH'
  );

  return (
    <Drawer>
      <Box mb={2}>
        <TotalBalance
          card={mainAccount}
          userPhotoUrl={user?.photoURL}
          userName={user?.displayName}
        />
      </Box>
      <Grid container spacing={2}>
        {clientAccounts?.map((account) => (
          <Grid item key={account.id} xs={12} sm={12} md={6} lg={3}>
            <Card data={account} />
          </Grid>
        ))}
      </Grid>
    </Drawer>
  );
};

export default Dashboard;
