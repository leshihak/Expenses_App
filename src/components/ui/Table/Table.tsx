import {
  Paper,
  Table as TableComponent,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from '@mui/material';
import { ChangeEvent, FC, useState } from 'react';
import { createTableData } from '../../../utils/helpers';
import { TableHeaderCell } from './Table.styled';
import format from 'date-fns/format';
import { StatementItem } from '../../../models/statementList.model';
import CurrencyCode from 'currency-codes';

interface TableProps {
  data: StatementItem[];
}

const Table: FC<TableProps> = ({ data }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const rows = data.map((item) =>
    createTableData(
      item.id,
      format(new Date(item.time * 1000), 'MM.dd.yyyy hh:mm:ss'),
      item.description,
      item.amount / 100,
      CurrencyCode.number(item.currencyCode.toString())?.code,
      item.commissionRate,
      item.cashbackAmount / 100,
      item.balance / 100
    )
  );

  const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  return (
    <TableContainer component={Paper}>
      <TableComponent sx={{ minWidth: 650 }}>
        <TableHead>
          <TableRow>
            <TableHeaderCell>Date and Time</TableHeaderCell>
            <TableHeaderCell align="center">Name of Operation</TableHeaderCell>
            <TableHeaderCell align="center">Operation Amount</TableHeaderCell>
            <TableHeaderCell align="center">Currency</TableHeaderCell>
            <TableHeaderCell align="center">Cashback, UAH</TableHeaderCell>
            <TableHeaderCell align="center">
              Commission Rate, UAH
            </TableHeaderCell>
            <TableHeaderCell align="right">Balance</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((row) => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.date}
                </TableCell>
                <TableCell align="center">{row.name}</TableCell>
                <TableCell align="center">{row.amount}</TableCell>
                <TableCell align="center">{row.currency}</TableCell>
                <TableCell align="center">
                  {row.cashback === 0 ? '-' : row.cashback}
                </TableCell>
                <TableCell align="center">
                  {row.commission === 0 ? '-' : row.commission}
                </TableCell>
                <TableCell align="right">{row.balance}</TableCell>
              </TableRow>
            ))}
          {emptyRows > 0 && (
            <TableRow
              sx={{
                height: 53 * emptyRows,
              }}
            >
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>
      </TableComponent>
      <TablePagination
        rowsPerPageOptions={[10, 25, 30]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={(event, newPage) => setPage(newPage)}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </TableContainer>
  );
};

export default Table;
