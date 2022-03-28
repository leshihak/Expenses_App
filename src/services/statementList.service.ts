import axios, { AxiosResponse } from 'axios';
import { apiActionUrls } from '../config/endpoints';

export const getStatementList = (
  token: string,
  dateFrom: number,
  dateTo: number
): Promise<AxiosResponse> =>
  axios.get(`${apiActionUrls.statementList}/0/${dateFrom}/${dateTo}`, {
    headers: {
      'X-Token': token,
    },
  });
