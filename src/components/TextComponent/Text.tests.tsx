import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for custom jest matchers
import Text from './Text';

export function TextTests() {
  test('Text component is visible', () => {
    render(<Text text="Text content" />);
    const textElement = screen.getByText(/text content/i);
    expect(textElement).toBeVisible();
  });

  test('Text component changes color and cursor when disabled', () => {
    render(<Text text="Text content" disabled={true} />);
    const textElement = screen.getByText(/text content/i);
    expect(textElement).toHaveStyle('color: grey');
    expect(textElement).toHaveStyle('cursor: not-allowed');
  });
}
