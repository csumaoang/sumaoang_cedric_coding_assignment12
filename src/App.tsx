import React from 'react';
import './App.css';
import { Button, Label, Text, Table, TableHeader, TableRow, TableCell, TableFooter, Dropdown, RadioButton } from './components';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Component Library</h1>
      </header>
      <main>
        <section>
          <h2>Button</h2>
          <Button disabled={false}>Click Me</Button>
          <Button disabled={true}>Disabled</Button>
        </section>

        <section>
          <h2>Label</h2>
          <Label>Label Text</Label>
        </section>

        <section>
          <h2>Text</h2>
          <Text>This is a text component</Text>
        </section>

        <section>
          <h2>Table</h2>
          <Table>
            <TableHeader>
              <TableRow>
                <TableCell>Header 1</TableCell>
                <TableCell>Header 2</TableCell>
              </TableRow>
            </TableHeader>
            <tbody>
              <TableRow>
                <TableCell>Row 1 Cell 1</TableCell>
                <TableCell>Row 1 Cell 2</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Row 2 Cell 1</TableCell>
                <TableCell>Row 2 Cell 2</TableCell>
              </TableRow>
            </tbody>
            <TableFooter>
              <TableRow>
                <TableCell>Footer 1</TableCell>
                <TableCell>Footer 2</TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        </section>

        <section>
          <h2>Dropdown</h2>
          <Dropdown options={['Option 1', 'Option 2', 'Option 3']} />
        </section>

        <section>
        <h2>Radio Button Component</h2>
          <RadioButton
            name="radioGroup"
            options={[
              { label: 'Option 1', value: '1' },
              { label: 'Option 2', value: '2' },
            ]}
            onChange={(value) => console.log(value)}
          />
          <RadioButton
            name="radioGroupDisabled"
            options={[
              { label: 'Option 1', value: '1' },
              { label: 'Option 2', value: '2' },
            ]}
            disabled={true}
          />
        </section>

      </main>
    </div>
  );
}

export default App;
