import { FC, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import useToken from '../../hooks/useToken';
import { getStatementList } from '../../services/statementList.service';
import Drawer from '../ui/Drawer/Drawer';
import { DateRange } from '@mui/lab/DateRangePicker';
import RangeDatePicker from '../ui/RangeDatePicker/RangeDatePicker';
import getTime from 'date-fns/getTime';
import Table from '../ui/Table/Table';
import { Box } from '@mui/material';
import { StatementItem } from '../../models/statementList.model';
import Loader from '../ui/Loader/Loader';

const StatementList: FC = () => {
  const token = useToken();

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

  return (
    <Drawer>
      <Box mb={3}>
        <RangeDatePicker dateRange={dateRange} onSetDateRange={setDateRange} />
      </Box>
      {statementList && <Table data={statementList} />}
    </Drawer>
  );
};

export default StatementList;
