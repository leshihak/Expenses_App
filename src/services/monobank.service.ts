import axios, { AxiosResponse } from 'axios';
import { apiActionUrls } from '../config/endpoints';

export const getMonobankData = (token: string): Promise<AxiosResponse> =>
  axios.get(apiActionUrls.clientInfo, {
    headers: {
      'X-Token': token,
    },
  });
