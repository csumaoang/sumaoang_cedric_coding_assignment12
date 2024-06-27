import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for custom jest matchers
import Label from './Label';

export function LabelTests() {
  test('Label component is visible', () => {
    render(<Label text="Label content" />);
    const labelElement = screen.getByText(/label content/i);
    expect(labelElement).toBeVisible();
  });

  test('Label component changes color and cursor when disabled', () => {
    render(<Label text="Label content" disabled={true} />);
    const labelElement = screen.getByText(/label content/i);
    expect(labelElement).toHaveStyle('color: grey');
    expect(labelElement).toHaveStyle('cursor: not-allowed');
  });
}
