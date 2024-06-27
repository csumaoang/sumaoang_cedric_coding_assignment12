import React from 'react';
import { render, screen } from '@testing-library/react';
import HeroImage from './HeroImage';

test('renders hero image with src and alt', () => {
  render(<HeroImage src="https://picsum.photos/800/400" alt="Hero Image" />);
  const heroImageElement = screen.getByLabelText(/hero image/i);
  expect(heroImageElement).toBeInTheDocument();
});

test('renders disabled hero image', () => {
  render(<HeroImage src="https://picsum.photos/800/400" alt="Hero Image" disabled={true} />);
  const heroImageElement = screen.getByLabelText(/hero image/i);
  expect(heroImageElement).toHaveStyle('opacity: 0.5');
});
