import './App.css';
import Calculator from "./components/Calculator"
import { useContext} from 'react';
import {ThemeContext} from './context/ThemeContext';
function App() {
  let [theme]=useContext(ThemeContext)
  return (
      <div className={`App ${theme}`}  >
        <Calculator />
      </div>
  );
}

export default App;
