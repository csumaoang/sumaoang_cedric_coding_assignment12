import React from 'react';
import './App.css';
import { Button, Label, Text, Table, TableHeader, TableRow, TableCell, TableFooter, Dropdown, RadioButton, Img, HeroImage, Card } from './components';

const App: React.FC = () => {
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
          <h2>Label Component</h2>
          <Label text="This is a Label component" />
          <Label text="Disabled Label" disabled={true} />
        </section>

        <section>
          <h2>Text Component</h2>
          <Text text="This is a text component" />
          <Text text="Disabled Text" disabled={true} />
        </section>

        <section>
          <h2>Table Component</h2>
          <Table>
            <TableHeader>
              <TableRow>
                <TableCell>Header 1</TableCell>
                <TableCell disabled={true}>Header 2</TableCell>
              </TableRow>
            </TableHeader>
            <tbody>
              <TableRow>
                <TableCell>Row 1 Cell 1</TableCell>
                <TableCell disabled={true}>Row 1 Cell 2</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Row 2 Cell 1</TableCell>
                <TableCell>Row 2 Cell 2</TableCell>
              </TableRow>
            </tbody>
            <TableFooter>
              <TableRow>
                <TableCell>Footer 1</TableCell>
                <TableCell disabled={true}>Footer 2</TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        </section>

        <section>
          <h2>Dropdown</h2>
          <Dropdown options={['Option 1', 'Option 2', 'Option 3']} />
          <Dropdown options={['Option 1', 'Option 2', 'Option 3']} disabled={true} />
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

        <section>
          <h2>Image</h2>
          <Img src="https://picsum.photos/1920/1080" alt="Sample Image" />
          <Img src="https://picsum.photos/1920/1080" alt="Sample Image" disabled={true} />
        </section>

        <section>
          <h2>Hero Image Component</h2>
          <HeroImage src="https://picsum.photos/1440/900" alt="Hero Image" />
          <HeroImage src="https://picsum.photos/1440/900" alt="Hero Image" disabled={true} />
        </section>

        <section>
          <h2>Card Component</h2>
          <Card>This is a card component</Card>
          <Card disabled={true}>This is a disabled card component</Card>
        </section>

      </main>
    </div>
  );
};

export default App;
