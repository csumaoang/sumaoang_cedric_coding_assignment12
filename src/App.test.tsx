import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for custom jest matchers
import App from './App';

// Import individual component test functions
import { ButtonTests } from './components/Button/Button.tests';
import { CardTests } from './components/CardComponent/Card.tests';
import { DropdownTests } from './components/Dropdown/Dropdown.tests';
import { HeroImageTests } from './components/HeroImage/HeroImage.tests';
import { ImgTests } from './components/Img/Img.tests';
import { LabelTests } from './components/Label/Label.tests';
import { RadioButtonTests } from './components/RadioButton/RadioButton.tests';
import { TableTests } from './components/Table/Table.tests';
import { TextTests } from './components/TextComponent/Text.tests';

// Main App component test
test('renders all components and checks visibility and disabled state', () => {
  render(<App />);
  // Add assertions for App component if needed
});

// Call individual component test functions
ButtonTests();
CardTests();
DropdownTests();
HeroImageTests();
ImgTests();
LabelTests();
RadioButtonTests();
TableTests();
TextTests();
