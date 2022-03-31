import { Box, Grid, Typography } from '@mui/material';
import { toast } from 'react-toastify';
import CurrencyCode from 'currency-codes';
import { FC, useEffect, useState } from 'react';
import { CurrencyItem } from '../../models/currency.model';
import { getCurrencyData } from '../../services/currency.service';
import { EUR_CURRENCY_CODE, USD_CURRENCY_CODE } from '../../static/constants';
import Drawer from '../ui/Drawer/Drawer';
import Loader from '../ui/Loader/Loader';

const HEADERS = ['CURRENCY', 'BUY', 'SELL'];

const Currency: FC = () => {
  const [currencyData, setCurrencyData] = useState<CurrencyItem[] | null>(null);

  useEffect(() => {
    getCurrencyData()
      .then((result) => {
        const { data } = result;
        setCurrencyData(data);
      })
      .catch((error) => toast.error(error));
  }, []);

  if (!currencyData) {
    return <Loader />;
  }

  return (
    <Drawer>
      <Grid container spacing={2}>
        {HEADERS.map((header) => (
          <Grid item key={header} xs={4} sm={4} md={2}>
            <Box
              bgcolor="ghostwhite"
              borderRadius="5px"
              my={1}
              mr={1}
              p={1}
              sx={{ overflowWrap: 'break-word' }}
            >
              {header}
            </Box>
          </Grid>
        ))}
      </Grid>
      {currencyData.map((currency) => {
        const showMainCurrencies = currency.rateSell && currency.rateBuy;
        const USDtoEUR =
          currency.currencyCodeA === USD_CURRENCY_CODE &&
          currency.currencyCodeB === EUR_CURRENCY_CODE;

        return (
          showMainCurrencies && (
            <Grid
              container
              key={`${currency.currencyCodeA}-${currency.date}-${currency.rateCross}`}
              spacing={2}
            >
              <Grid item xs={4} sm={4} md={2}>
                <Box
                  bgcolor="ghostwhite"
                  borderRadius="5px"
                  my={1}
                  mr={1}
                  p={1}
                  sx={{ overflowWrap: 'break-word' }}
                >
                  <Typography>
                    {USDtoEUR
                      ? `${
                          CurrencyCode.number(currency.currencyCodeA.toString())
                            ?.code
                        }/${
                          CurrencyCode.number(currency.currencyCodeB.toString())
                            ?.code
                        }`
                      : CurrencyCode.number(currency.currencyCodeA.toString())
                          ?.code}
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={4} sm={4} md={2}>
                <Box
                  bgcolor="ghostwhite"
                  borderRadius="5px"
                  my={1}
                  mr={1}
                  p={1}
                >
                  <Typography>{currency.rateBuy}</Typography>
                </Box>
              </Grid>
              <Grid item xs={4} sm={4} md={2}>
                <Box
                  bgcolor="ghostwhite"
                  borderRadius="5px"
                  my={1}
                  mr={1}
                  p={1}
                >
                  <Typography>{currency.rateSell}</Typography>
                </Box>
              </Grid>
            </Grid>
          )
        );
      })}
    </Drawer>
  );
};

export default Currency;
