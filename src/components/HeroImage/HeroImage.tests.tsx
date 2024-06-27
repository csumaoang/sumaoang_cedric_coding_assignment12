import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for custom jest matchers
import HeroImage from './HeroImage';

export function HeroImageTests() {
  test('HeroImage component is visible', () => {
    render(<HeroImage src="image.jpg" alt="Hero Image" />);
    const heroImageElement = screen.getByLabelText(/hero image/i);
    expect(heroImageElement).toBeVisible();
  });

  test('HeroImage component changes opacity and cursor when disabled', () => {
    render(<HeroImage src="image.jpg" alt="Hero Image" disabled={true} />);
    const heroImageElement = screen.getByLabelText(/hero image/i);
    expect(heroImageElement).toHaveStyle('opacity: 0.5');
    expect(heroImageElement).toHaveStyle('cursor: not-allowed');
  });
}
