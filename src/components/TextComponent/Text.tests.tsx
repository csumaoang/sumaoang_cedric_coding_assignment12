import React from 'react';
import { render, screen } from '@testing-library/react';
import Text from './Text';

test('renders text component', () => {
  render(<Text>This is a text component</Text>);
  const textElement = screen.getByText(/this is a text component/i);
  expect(textElement).toBeInTheDocument();
});
