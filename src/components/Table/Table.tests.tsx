// Table.tests.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for custom jest matchers
import { Table, TableHeader, TableRow, TableCell, TableFooter } from './Table'; // Adjust path as per your project structure

export function TableTests() {
  test('Table components are visible', () => {
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
          <TableRow>
            <TableCell>Row 2 Cell 1</TableCell>
            <TableCell>Row 2 Cell 2</TableCell>
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

    // Check visibility
    expect(screen.getByText(/header 1/i)).toBeVisible();
    expect(screen.getByText(/row 1 cell 1/i)).toBeVisible();
    expect(screen.getByText(/footer 1/i)).toBeVisible();
  });

  test('Table components change background color when disabled', () => {
    render(
      <Table>
        <TableHeader>
          <TableRow>
            <TableCell>Header 1</TableCell>
            <TableCell disabled={true}>Header 2</TableCell>
          </TableRow>
        </TableHeader>
        <tbody>
          <TableRow>
            <TableCell>Row 1 Cell 1</TableCell>
            <TableCell disabled={true}>Row 1 Cell 2</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Row 2 Cell 1</TableCell>
            <TableCell disabled={true}>Row 2 Cell 2</TableCell>
          </TableRow>
        </tbody>
        <TableFooter>
          <TableRow>
            <TableCell>Footer 1</TableCell>
            <TableCell disabled={true}>Footer 2</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    );

    // Check background color when disabled for TableHeader
    const tableHeaderElement = screen.getByText(/header 2/i).closest('thead');
    expect(tableHeaderElement).toHaveStyle('background-color: #f2f2f2');

    // Check background color when disabled for TableRow
    const tableRowElement = screen.getByText(/row 1 cell 2/i).closest('tr');
    expect(tableRowElement).toHaveStyle('background-color: #f2f2f2');

    // Check background color when disabled for TableCell
    const tableCellElement = screen.getByText(/row 2 cell 2/i).closest('td');
    expect(tableCellElement).toHaveStyle('background-color: #f2f2f2');

    // Check background color when disabled for TableFooter
    const tableFooterElement = screen.getByText(/footer 2/i).closest('tfoot');
    expect(tableFooterElement).toHaveStyle('background-color: #f2f2f2');
  });
}
