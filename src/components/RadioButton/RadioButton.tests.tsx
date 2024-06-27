import React from 'react';
import { render, screen } from '@testing-library/react';
import RadioButton from './RadioButton';

test('renders radio buttons with options', () => {
  render(
    <RadioButton
      name="example"
      options={[
        { label: 'Option 1', value: '1' },
        { label: 'Option 2', value: '2' },
      ]}
    />
  );
  const optionElement = screen.getByLabelText(/option 1/i);
  expect(optionElement).toBeInTheDocument();
});

test('renders disabled radio button', () => {
  render(
    <RadioButton
      name="example"
      options={[
        { label: 'Option 1', value: '1' },
        { label: 'Option 2', value: '2' },
      ]}
      disabled={true}
    />
  );
  const optionElement = screen.getByLabelText(/option 1/i);
  expect(optionElement).toHaveStyle('cursor: not-allowed');
});
