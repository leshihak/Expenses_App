import { FC, useEffect, useState } from 'react';
import useMonobankToken from '../../hooks/useMonobankAuth';
import { getStatementList } from '../../services/statementList.service';
import Drawer from '../ui/Drawer/Drawer';
import { DateRange } from '@mui/lab/DateRangePicker';
import RangeDatePicker from '../ui/RangeDatePicker/RangeDatePicker';
import getTime from 'date-fns/getTime';

const StatementList: FC = () => {
  const token = useMonobankToken();

  const [dateRange, setDateRange] = useState<DateRange<Date>>([null, null]);

  useEffect(() => {
    if (token && dateRange[0] !== null && dateRange[1] !== null) {
      getStatementList(token, getTime(dateRange[0]), getTime(dateRange[1]))
        .then((result) => {
          const { data } = result;
          console.log(data);
        })
        .catch((error) => console.log(error));
    }
  }, [dateRange, token]);

  return (
    <Drawer>
      <RangeDatePicker dateRange={dateRange} onSetDateRange={setDateRange} />
    </Drawer>
  );
};

export default StatementList;
