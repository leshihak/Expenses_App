import { Box, Typography } from '@mui/material';
import { FC } from 'react';
import CurrencyCode from 'currency-codes';
import { AccountInfo } from '../../models/bank.model';
import MastercardLogo from '../ui/Icons/MastercardLogo';

interface CardProps {
  data: AccountInfo;
}

const Card: FC<CardProps> = ({ data }) => {
  const textColor = data.type === 'black' ? 'white' : 'black';

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      border="1px solid gray"
      p={2.5}
      sx={{ borderRadius: '10px' }}
      height="185px"
      bgcolor={
        data.type === 'black'
          ? 'black'
          : data.type === 'white'
          ? 'white'
          : 'gray'
      }
    >
      <Box display="flex" height="30px">
        <Typography color={textColor} fontWeight="bold">
          monobank
        </Typography>
        <Box ml={1}>
          <Typography
            variant="caption"
            color={data.type === 'black' ? '#9b9b9b' : '#161616'}
          >
            | Universal Bank
          </Typography>
        </Box>
      </Box>
      <Box height="30px">
        <Typography color={textColor} fontWeight="bold">
          {data.balance / 100}{' '}
          {CurrencyCode.number(data.currencyCode.toString())?.code}
        </Typography>
      </Box>
      <Box color={textColor} height="30px">
        {data.maskedPan?.[0]}
      </Box>
      <Box width={1} display="flex" justifyContent="end">
        <Box width="56px">
          <MastercardLogo />
        </Box>
      </Box>
    </Box>
  );
};

export default Card;
