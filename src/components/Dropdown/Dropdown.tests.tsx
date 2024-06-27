import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for custom jest matchers
import Dropdown from './Dropdown';

export function DropdownTests() {
  test('Dropdown component is visible', () => {
    render(<Dropdown options={['Option 1', 'Option 2']} />);
    const dropdownElement = screen.getByRole('combobox');
    expect(dropdownElement).toBeVisible();
  });

  test('Dropdown component changes background color and cursor when disabled', () => {
    render(<Dropdown options={['Option 1', 'Option 2']} disabled={true} />);
    const dropdownElement = screen.getByRole('combobox');
    expect(dropdownElement).toHaveStyle('background-color: grey');
    expect(dropdownElement).toHaveStyle('cursor: not-allowed');
  });
}
