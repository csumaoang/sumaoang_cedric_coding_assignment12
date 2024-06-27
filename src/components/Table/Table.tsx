import React from 'react';
import styled from 'styled-components';

const TableContainer = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHeader = styled.thead<{ disabled?: boolean }>`
  background-color: ${({ disabled }) => (disabled ? '#ccc' : '#f2f2f2')};
`;

const TableRow = styled.tr<{ disabled?: boolean }>`
  &:nth-child(even) {
    background-color: ${({ disabled }) => (disabled ? '#ccc' : '#f2f2f2')};
  }
`;

const TableCell = styled.td<{ disabled?: boolean }>`
  padding: 8px;
  border: 1px solid #ddd;
  background-color: ${({ disabled }) => (disabled ? '#eee' : 'inherit')};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'default')}; /* Cursor styles */
`;

const TableFooter = styled.tfoot<{ disabled?: boolean }>`
  background-color: ${({ disabled }) => (disabled ? '#ccc' : '#f2f2f2')};
`;

export type TableProps = {
  children: React.ReactNode;
  disabled?: boolean;
};

const Table: React.FC<TableProps> = ({ children, disabled = false }) => {
  const modifyChildren = (child: React.ReactNode): React.ReactNode => {
    if (!React.isValidElement(child)) return child;

    // Clone and pass the disabled prop to each child element
    return React.cloneElement(child as React.ReactElement<any>, { disabled });
  };

  return (
    <TableContainer>
      {React.Children.map(children, (child) => {
        return modifyChildren(child);
      })}
    </TableContainer>
  );
};

export { Table, TableHeader, TableRow, TableCell, TableFooter };
