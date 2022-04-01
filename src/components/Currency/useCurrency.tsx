import CurrencyCode from 'currency-codes';
import { TableHeader } from '../../models/common.model';
import {
  MonobankCurrencyItem,
  PrivateBankCurrencyItem,
} from '../../models/currency.model';
import { USD_CURRENCY_CODE, EUR_CURRENCY_CODE } from '../../static/constants';
import { roundNumberWithFixedDecimal } from '../../utils/helpers';

const CURRENCY_HEADERS = [
  { title: 'CURRENCY', key: 'currency' },
  { title: 'BUY', key: 'buy' },
  { title: 'SELL', key: 'sell' },
];

const CURRENCY_SORTING_ARR = ['USD', 'EUR', 'BTC'];

interface UseCurrency {
  privateBankRows: Record<string, string | number>[] | undefined;
  monobankRows: Record<string, string | number | undefined>[] | undefined;
  CURRENCY_HEADERS: TableHeader[];
  CURRENCY_SORTING_ARR: string[];
}

const useCurrency = (
  monobankCurrencyData: MonobankCurrencyItem[] | null,
  privateBankCurrencyData: PrivateBankCurrencyItem[] | null
): UseCurrency => {
  const privateBankRows = privateBankCurrencyData?.map((currency) => ({
    currency: currency.ccy,
    buy: roundNumberWithFixedDecimal(+currency.buy),
    sell: roundNumberWithFixedDecimal(+currency.sale),
  }));

  const monobankRows = monobankCurrencyData
    ?.map((currency) => {
      const USDtoEUR =
        currency.currencyCodeA === USD_CURRENCY_CODE &&
        currency.currencyCodeB === EUR_CURRENCY_CODE;

      return {
        currency: USDtoEUR
          ? `${CurrencyCode.number(currency.currencyCodeA.toString())?.code}/${
              CurrencyCode.number(currency.currencyCodeB.toString())?.code
            }`
          : CurrencyCode.number(currency.currencyCodeA.toString())?.code,
        buy: currency.rateBuy
          ? roundNumberWithFixedDecimal(currency.rateBuy)
          : undefined,
        sell: currency.rateSell
          ? roundNumberWithFixedDecimal(currency.rateSell)
          : undefined,
      };
    })
    .filter((item) => item.buy && item.sell);

  return {
    monobankRows,
    privateBankRows,
    CURRENCY_HEADERS,
    CURRENCY_SORTING_ARR,
  };
};

export default useCurrency;
