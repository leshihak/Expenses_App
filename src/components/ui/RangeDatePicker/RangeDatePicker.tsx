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
        <Box display="flex" alignItems="center">
          <TextField
            sx={{ backgroundColor: 'white', borderRadius: '4px' }}
            variant="filled"
            {...startProps}
          />
          <Box mx={2} color="white">
            {' '}
            to{' '}
          </Box>
          <TextField
            sx={{ backgroundColor: 'white', borderRadius: '4px' }}
            variant="filled"
            {...endProps}
          />
        </Box>
      )}
    />
  </LocalizationProvider>
);

export default RangeDatePicker;
