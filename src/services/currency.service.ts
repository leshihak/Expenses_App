import axios, { AxiosResponse } from 'axios';
import { apiActionUrls } from '../config/endpoints';

export const getCurrencyData = (): Promise<AxiosResponse> =>
  axios.get(apiActionUrls.currencyInfo);
