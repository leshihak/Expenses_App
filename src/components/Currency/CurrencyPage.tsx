import { Box, Typography } from '@mui/material';
import CurrencyCode from 'currency-codes';
import { FC, useEffect, useState } from 'react';
import { Currency } from '../../models/currency.model';
import { getCurrencyData } from '../../services/currency.service';
import { EUR_CURRENCY_CODE, USD_CURRENCY_CODE } from '../../static/constants';

const CurrencyPage: FC = () => {
  const [currencyData, setCurrencyData] = useState<Currency[]>([]);

  useEffect(() => {
    getCurrencyData()
      .then((result) => {
        const { data } = result;
        setCurrencyData(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <Box>
      <Box display="flex">
        <Box
          bgcolor="ghostwhite"
          p={1}
          ml={1}
          minWidth="100px"
          borderRadius="5px"
        >
          CURRENCY
        </Box>
        <Box
          bgcolor="ghostwhite"
          p={1}
          ml={1}
          minWidth="100px"
          borderRadius="5px"
        >
          BUY
        </Box>
        <Box
          bgcolor="ghostwhite"
          p={1}
          ml={1}
          minWidth="100px"
          borderRadius="5px"
        >
          SELL
        </Box>
      </Box>
      {currencyData?.map((currency) => {
        const showMainCurrencies = currency.rateSell && currency.rateBuy;
        const USDtoEUR =
          currency.currencyCodeA === USD_CURRENCY_CODE &&
          currency.currencyCodeB === EUR_CURRENCY_CODE;
        console.log(CurrencyCode.number(currency.currencyCodeA.toString()));
        return (
          showMainCurrencies && (
            <Box
              key={`${currency.currencyCodeA}-${currency.date}-${currency.rateCross}`}
              display="flex"
              my={1}
            >
              <Box
                bgcolor="ghostwhite"
                p={1}
                ml={1}
                minWidth="100px"
                borderRadius="5px"
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
              <Box
                bgcolor="ghostwhite"
                p={1}
                ml={1}
                minWidth="100px"
                borderRadius="5px"
              >
                <Typography>{currency.rateBuy}</Typography>
              </Box>
              <Box
                bgcolor="ghostwhite"
                p={1}
                ml={1}
                minWidth="100px"
                borderRadius="5px"
              >
                <Typography>{currency.rateSell}</Typography>
              </Box>
            </Box>
          )
        );
      })}
    </Box>
  );
};

export default CurrencyPage;
