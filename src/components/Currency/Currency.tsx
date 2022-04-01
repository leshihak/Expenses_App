import { toast } from 'react-toastify';
import { FC, useEffect, useState } from 'react';
import {
  MonobankCurrencyItem,
  PrivateBankCurrencyItem,
} from '../../models/currency.model';
import {
  getMonobankCurrencyData,
  getPrivateBankCurrencyData,
} from '../../services/currency.service';
import Drawer from '../ui/Drawer/Drawer';
import Loader from '../ui/Loader/Loader';
import Table from '../ui/Table/Table';
import { Grid, Typography } from '@mui/material';
import useCurrency from './useCurrency';

const Currency: FC = () => {
  const [monobankCurrencyData, setMonobankCurrencyData] = useState<
    MonobankCurrencyItem[] | null
  >(null);
  const [privateBankCurrencyData, setPrivateBankCurrencyData] = useState<
    PrivateBankCurrencyItem[] | null
  >(null);

  const {
    monobankRows,
    privateBankRows,
    CURRENCY_SORTING_ARR,
    CURRENCY_HEADERS,
  } = useCurrency(monobankCurrencyData, privateBankCurrencyData);

  useEffect(() => {
    getMonobankCurrencyData()
      .then((result) => {
        const { data } = result;
        setMonobankCurrencyData(data);
      })
      .catch((error) => toast.error(error));
  }, []);

  useEffect(() => {
    getPrivateBankCurrencyData()
      .then((result) => {
        const filteredData: PrivateBankCurrencyItem[] = result.data.filter(
          (item: PrivateBankCurrencyItem) => item.ccy !== 'RUR'
        );
        setPrivateBankCurrencyData(
          filteredData.sort(
            (a, b) =>
              CURRENCY_SORTING_ARR.indexOf(a.ccy) -
              CURRENCY_SORTING_ARR.indexOf(b.ccy)
          )
        );
      })
      .catch((error) => toast.error(error));
  }, []);

  if (!monobankCurrencyData || !privateBankCurrencyData) {
    return <Loader />;
  }

  return (
    <Drawer>
      <Grid container spacing={3}>
        <Grid item xs={12} lg={6}>
          <Typography color="white" variant="h4">
            Monobank Exchange
          </Typography>
          <Table rows={monobankRows} headers={CURRENCY_HEADERS} />
        </Grid>
        <Grid item xs={12} lg={6}>
          <Typography color="white" variant="h4">
            PrivateBank Exchange
          </Typography>
          <Table rows={privateBankRows} headers={CURRENCY_HEADERS} />
        </Grid>
      </Grid>
    </Drawer>
  );
};

export default Currency;
