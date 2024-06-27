import React from 'react';
import { render, screen } from '@testing-library/react';
import Img from './Img';

test('renders image with src and alt', () => {
  render(<Img src="https://via.placeholder.com/150" alt="Placeholder Image" />);
  const imgElement = screen.getByAltText(/placeholder image/i);
  expect(imgElement).toBeInTheDocument();
});

test('renders disabled image', () => {
  render(<Img src="https://via.placeholder.com/150" alt="Placeholder Image" disabled={true} />);
  const imgElement = screen.getByAltText(/placeholder image/i);
  expect(imgElement).toHaveStyle('opacity: 0.5');
});
