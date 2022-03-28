import TextField from '@mui/material/TextField';
import DateRangePicker, { DateRange } from '@mui/lab/DateRangePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import Box from '@mui/material/Box';
import { getMinDate, getMaxDate } from '../../../utils/helpers';
import { Dispatch, FC, SetStateAction } from 'react';

interface RangeDatePickerProps {
  dateRange: DateRange<Date>;
  onSetDateRange: Dispatch<SetStateAction<DateRange<Date>>>;
}

const RangeDatePicker: FC<RangeDatePickerProps> = ({
  dateRange,
  onSetDateRange,
}) => (
  <LocalizationProvider dateAdapter={AdapterDateFns}>
    <DateRangePicker
      disableFuture
      minDate={getMinDate(dateRange[1], 31)}
      maxDate={getMaxDate(dateRange[0], 31)}
      startText="Start Period"
      endText="End Period"
      value={dateRange}
      onChange={(newValue) => onSetDateRange(newValue)}
      renderInput={(startProps, endProps) => (
        <>
          <TextField
            sx={{ backgroundColor: 'white' }}
            variant="filled"
            {...startProps}
          />
          <Box mx={2}> to </Box>
          <TextField
            sx={{ backgroundColor: 'white' }}
            variant="filled"
            {...endProps}
          />
        </>
      )}
    />
  </LocalizationProvider>
);

export default RangeDatePicker;
