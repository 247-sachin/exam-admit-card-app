// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';

import NxWelcome from './nx-welcome';

import { Route, Routes, Link } from 'react-router-dom';
import Ab from './Components/ab';
export function App() {
  return (
    <div>
      <h1>this is Comp</h1>
      <Ab/>
    </div>
  );
}

export default App;
