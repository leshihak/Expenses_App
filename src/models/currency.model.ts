export interface MonobankCurrencyItem {
  currencyCodeA: number;
  currencyCodeB: number;
  date: number;
  rateSell: number;
  rateBuy: number;
  rateCross: number;
}

export interface PrivateBankCurrencyItem {
  ccy: string;
  base_ccy: string;
  buy: string;
  sale: string;
}
