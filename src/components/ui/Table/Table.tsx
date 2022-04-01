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
import { StyledTableCell } from './Table.styled';
import { v4 as uuidv4 } from 'uuid';
import Loader from '../Loader/Loader';
import { TableHeader } from '../../../models/common.model';

interface TableProps {
  rows: Record<string, string | number | undefined>[] | undefined;
  headers: TableHeader[];
  withPagination?: boolean;
}

const Table: FC<TableProps> = ({ rows, headers, withPagination }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  if (!rows) {
    return <Loader />;
  }

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
            {headers.map((header) => (
              <StyledTableCell align="center" key={header.key}>
                {header.title}
              </StyledTableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={uuidv4()}>
              {headers.map((header) => (
                <StyledTableCell align="center" key={uuidv4()}>
                  {row[header.key]}
                </StyledTableCell>
              ))}
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
      {withPagination && (
        <TablePagination
          rowsPerPageOptions={[10, 25, 30]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={(event, newPage) => setPage(newPage)}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      )}
    </TableContainer>
  );
};

export default Table;
