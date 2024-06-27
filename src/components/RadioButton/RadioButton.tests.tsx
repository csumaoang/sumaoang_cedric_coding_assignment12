import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for custom jest matchers
import RadioButton from './RadioButton';

export function RadioButtonTests() {
  test('RadioButton component is visible', () => {
    render(<RadioButton name="test" options={[{ label: 'Option 1', value: '1' }]} />);
    const radioButtonElement = screen.getByLabelText(/option 1/i);
    expect(radioButtonElement).toBeVisible();
  });

  test('RadioButton component changes cursor when disabled', () => {
    render(<RadioButton name="test" options={[{ label: 'Option 1', value: '1' }]} disabled={true} />);
    const radioButtonElement = screen.getByLabelText(/option 1/i);
    expect(radioButtonElement).toHaveStyle('cursor: not-allowed');
  });
}
