import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { Table, TableHeader, TableRow, TableCell, TableFooter } from './Table';

export default {
  title: 'Components/Table',
  component: Table,
} as Meta;

const Template: StoryFn = () => (
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

export const Default = Template.bind({});
