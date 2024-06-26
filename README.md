# My Component Library

This is a UI component library built with React and Storybook.

## Getting Started

Follow these instructions to get the site up and running on `localhost:8083`.

### Prerequisites

- Docker installed on your machine.

### Installation

1. Clone the repository:

   ```bash
   git clone <repository_url>
   cd my-component-library
   ```

2. Build the Docker image:

   ```bash
   docker build -t sumaoang_cedric_coding_assignment12 .
   ```

3. Run the Docker container:

   ```bash
   docker run -p 8083:8083 sumaoang_cedric_coding_assignment12
   ```

4. Open your browser and navigate to `http://localhost:8083`.

## Components

The library contains the following components:

- Button
- Label
- Text
- Table
- TableHeader
- TableRow
- TableCell
- TableFooter
- Dropdown
- RadioButton
- Img
- HeroImage
- Card

## Testing

Each component has at least two tests:

- A test that checks that the component is visible.
- A test that checks that the background color changes when the component is in the ‘disabled’ state.

To run the tests:

```bash
npm test
