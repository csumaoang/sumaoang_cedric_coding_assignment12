import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for custom jest matchers
import Card from './Card';

export function CardTests() {
  test('Card component is visible', () => {
    render(<Card>Card content</Card>);
    const cardElement = screen.getByText(/card content/i);
    expect(cardElement).toBeVisible();
  });

  test('Card component changes opacity when disabled', () => {
    render(<Card disabled={true}>Card content</Card>);
    const cardElement = screen.getByText(/card content/i);
    expect(cardElement).toHaveStyle('opacity: 0.5');
  });
}
