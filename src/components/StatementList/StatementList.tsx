import { FC, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { getStatementList } from '../../services/statementList.service';
import Drawer from '../ui/Drawer/Drawer';
import { DateRange } from '@mui/lab/DateRangePicker';
import RangeDatePicker from '../ui/RangeDatePicker/RangeDatePicker';
import getTime from 'date-fns/getTime';
import Table from '../ui/Table/Table';
import { Box } from '@mui/material';
import { StatementItem } from '../../models/statementList.model';
import Loader from '../ui/Loader/Loader';
import { createStatementListTableData } from '../../utils/helpers';
import CurrencyCode from 'currency-codes';
import format from 'date-fns/format';

const HEADERS = [
  { title: 'DATE AND TIME', key: 'date' },
  { title: 'NAME OF OPERATION', key: 'name' },
  { title: 'OPERATION AMOUNT', key: 'amount' },
  { title: 'CURRENCY', key: 'currency' },
  { title: 'CASHBACK, UAH', key: 'cashback' },
  { title: 'COMMISSION RATE, UAH', key: 'commission' },
  { title: 'BALANCE', key: 'balance' },
];

const StatementList: FC = () => {
  const token = localStorage.getItem('token');

  const [dateRange, setDateRange] = useState<DateRange<Date>>([null, null]);
  const [statementList, setStatementList] = useState<StatementItem[] | null>(
    null
  );

  useEffect(() => {
    if (token && dateRange[0] !== null && dateRange[1] !== null) {
      getStatementList(token, getTime(dateRange[0]), getTime(dateRange[1]))
        .then((result) => {
          const { data } = result;
          setStatementList(data);
        })
        .catch((error) => toast.error(error));
    }
  }, [dateRange, token]);

  if (!statementList && dateRange.every((date) => date !== null)) {
    return <Loader />;
  }

  const rows =
    statementList?.map((item) =>
      createStatementListTableData(
        format(new Date(item.time * 1000), 'MM.dd.yyyy hh:mm:ss'),
        item.description,
        item.amount / 100,
        CurrencyCode.number(item.currencyCode.toString())?.code,
        item.commissionRate,
        item.cashbackAmount / 100,
        item.balance / 100
      )
    ) ?? [];

  return (
    <Drawer>
      <Box mb={3}>
        <RangeDatePicker dateRange={dateRange} onSetDateRange={setDateRange} />
      </Box>
      {statementList && <Table rows={rows} headers={HEADERS} withPagination />}
    </Drawer>
  );
};

export default StatementList;
