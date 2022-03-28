import subDays from 'date-fns/subDays';
import addDays from 'date-fns/addDays';

export const getMinDate = (date: Date | null, amount: number) =>
  date ? subDays(date, amount) : undefined;

export const getMaxDate = (date: Date | null, amount: number) =>
  date ? addDays(date, amount) : undefined;
