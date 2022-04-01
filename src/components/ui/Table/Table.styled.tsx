import { TableCell } from '@mui/material';
import styled from 'styled-components';

export const StyledTableCell = styled(TableCell)`
  &:first-child {
    text-align: left;
  }

  &:last-child {
    text-align: right;
  }
`;
