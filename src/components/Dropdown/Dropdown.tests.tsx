import React from 'react';
import { render, screen } from '@testing-library/react';
import Dropdown from './Dropdown';

test('renders dropdown with options', () => {
  render(<Dropdown options={['Option 1', 'Option 2', 'Option 3']} />);
  const optionElement = screen.getByText(/option 1/i);
  expect(optionElement).toBeInTheDocument();
});

test('renders disabled dropdown', () => {
  render(<Dropdown options={['Option 1', 'Option 2', 'Option 3']} disabled={true} />);
  const selectElement = screen.getByRole('combobox');
  expect(selectElement).toHaveStyle('background-color: grey');
});
