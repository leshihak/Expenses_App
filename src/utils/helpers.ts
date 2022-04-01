import subDays from 'date-fns/subDays';
import addDays from 'date-fns/addDays';

export const getMinDate = (date: Date | null, amount: number) =>
  date ? subDays(date, amount) : undefined;

export const getMaxDate = (date: Date | null, amount: number) =>
  date ? addDays(date, amount) : undefined;

export const createStatementListTableData = (
  date: string,
  name: string,
  amount: number,
  currency: string | undefined,
  commission: number,
  cashback: number,
  balance: number
) => ({
  date,
  name,
  amount,
  currency,
  commission,
  cashback,
  balance,
});

export const roundNumberWithFixedDecimal = (number: number) =>
  (Math.round(number * 100) / 100).toFixed(2);
