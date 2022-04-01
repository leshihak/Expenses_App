import axios, { AxiosResponse } from 'axios';
import { apiActionUrls } from '../config/endpoints';

export const getMonobankCurrencyData = (): Promise<AxiosResponse> =>
  axios.get(apiActionUrls.monobankCurrencyInfo);

export const getPrivateBankCurrencyData = (): Promise<AxiosResponse> =>
  axios.get(`${apiActionUrls.privateBankCurrencyInfo}&coursid=3`);
