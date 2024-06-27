import React from 'react';
import { render, screen } from '@testing-library/react';
import { Table, TableHeader, TableRow, TableCell, TableFooter } from './Table';

test('renders table component', () => {
  render(
    <Table>
      <TableHeader>
        <TableRow>
          <TableCell>Header 1</TableCell>
          <TableCell>Header 2</TableCell>
        </TableRow>
      </TableHeader>
      <tbody>
        <TableRow>
          <TableCell>Row 1 Cell 1</TableCell>
          <TableCell>Row 1 Cell 2</TableCell>
        </TableRow>
      </tbody>
      <TableFooter>
        <TableRow>
          <TableCell>Footer 1</TableCell>
          <TableCell>Footer 2</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
  const headerElement = screen.getByText(/header 1/i);
  expect(headerElement).toBeInTheDocument();
  const rowElement = screen.getByText(/row 1 cell 1/i);
  expect(rowElement).toBeInTheDocument();
  const footerElement = screen.getByText(/footer 1/i);
  expect(footerElement).toBeInTheDocument();
});
