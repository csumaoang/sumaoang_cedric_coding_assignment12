import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from './Card';

test('renders card component', () => {
  render(<Card>This is a card component</Card>);
  const cardElement = screen.getByText(/this is a card component/i);
  expect(cardElement).toBeInTheDocument();
});

test('renders disabled card', () => {
  render(<Card disabled={true}>This is a card component</Card>);
  const cardElement = screen.getByText(/this is a card component/i);
  expect(cardElement).toHaveStyle('opacity: 0.5');
});
