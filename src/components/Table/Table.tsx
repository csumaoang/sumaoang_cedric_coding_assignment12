import React from 'react';
import styled from 'styled-components';

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const StyledTableHeader = styled.thead`
  background-color: #f2f2f2;
`;

const StyledTableRow = styled.tr`
  border-bottom: 1px solid #ddd;
`;

const StyledTableCell = styled.td`
  padding: 8px;
  text-align: left;
`;

const StyledTableFooter = styled.tfoot`
  background-color: #f2f2f2;
`;

export const Table: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <StyledTable>{children}</StyledTable>
);

export const TableHeader: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <StyledTableHeader>{children}</StyledTableHeader>
);

export const TableRow: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <StyledTableRow>{children}</StyledTableRow>
);

export const TableCell: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <StyledTableCell>{children}</StyledTableCell>
);

export const TableFooter: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <StyledTableFooter>{children}</StyledTableFooter>
);
