import React from 'react';
import './App.css';
import { Button, Label} from './components';

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
      </main>
    </div>
  );
}

export default App;
