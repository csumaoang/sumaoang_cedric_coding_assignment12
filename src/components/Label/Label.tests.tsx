import React from 'react';
import { render, screen } from '@testing-library/react';
import Label from './Label';

test('renders label with text', () => {
  render(<Label text="Label Text"/>);
  const labelElement = screen.getByText(/label text/i);
  expect(labelElement).toBeInTheDocument();
});
