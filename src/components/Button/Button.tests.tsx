import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from './Button';

test('renders Button component', () => {
  render(<Button>Button</Button>);
  const buttonElement = screen.getByText(/Button/i);
  expect(buttonElement).toBeInTheDocument();
});

test('changes background color when disabled', () => {
  render(<Button disabled>Button</Button>);
  const buttonElement = screen.getByText(/Button/i);
  expect(buttonElement).toHaveStyle('background-color: grey');
});
