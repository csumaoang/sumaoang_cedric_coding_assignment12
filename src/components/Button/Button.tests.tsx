import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for custom jest matchers
import Button from './Button';

export function ButtonTests() {
  test('Button component is visible', () => {
    render(<Button>Click me</Button>);
    const buttonElement = screen.getByText(/click me/i);
    expect(buttonElement).toBeVisible();
  });

  test('Button component changes background color when disabled', () => {
    render(<Button disabled={true}>Click me</Button>);
    const buttonElement = screen.getByText(/click me/i);
    
    // Check background color when disabled
    expect(buttonElement).toHaveStyle('background-color: grey');

    // Optionally check cursor style when disabled
    expect(buttonElement).toHaveStyle('cursor: not-allowed');
  });
}
