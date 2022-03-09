import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function GenerateFibonacci(second, minute) {
    let firstMin = parseInt(minute.toString().substring(0,1));
    let secondMin = parseInt(minute.substring(1,2));
    var fibonacci = [];
    fibonacci[0] = firstMin;
    fibonacci[1] = secondMin;
    for (var i = 2; i <= second; i++) {
      fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
    }
    return fibonacci;
}

export default function FibonacciTable({second, minute}) {
const fibonacciResult = GenerateFibonacci(second,minute);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Reference Points</TableCell>
            <TableCell align="center">Sumatory</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {fibonacciResult.map((row,item) => (
            <TableRow
              key={row}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="center" component="th" scope="row">
                {(item === 0 || item === 1)?
                  `Seed `: `Serie ${item-1}`}
              </TableCell>
              <TableCell align="center">{row}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
