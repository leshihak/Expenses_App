import { Box } from '@mui/material';
import { FC } from 'react';
import CurrencyCode from 'currency-codes';
import { AccountInfo } from '../../models/bank.model';
import MastercardLogo from '../ui/Icons/MastercardLogo';

interface CardProps {
  data: AccountInfo;
}

const Card: FC<CardProps> = ({ data }) => {
  return (
    <Box
      my={2}
      border="1px solid gray"
      p={1}
      sx={{ borderRadius: '10px' }}
      width="300px"
      height="185px"
      bgcolor={
        data.type === 'black'
          ? 'black'
          : data.type === 'white'
          ? 'white'
          : 'gray'
      }
    >
      <Box color="white">{data.type}</Box>
      <Box color="white">{data.maskedPan[0]}</Box>
      <Box color="white">
        {data.balance / 100}{' '}
        {CurrencyCode.number(data.currencyCode.toString())?.code}
      </Box>
      <Box height="30px" width="30px">
        <MastercardLogo />
      </Box>
    </Box>
  );
};

export default Card;
