import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for custom jest matchers
import Img from './Img';

export function ImgTests() {
  test('Img component is visible', () => {
    render(<Img src="image.jpg" alt="Image" />);
    const imgElement = screen.getByAltText(/image/i);
    expect(imgElement).toBeVisible();
  });

  test('Img component changes opacity and cursor when disabled', () => {
    render(<Img src="image.jpg" alt="Image" disabled={true} />);
    const imgElement = screen.getByAltText(/image/i);
    expect(imgElement).toHaveStyle('opacity: 0.5');
    expect(imgElement).toHaveStyle('cursor: not-allowed');
  });
}
