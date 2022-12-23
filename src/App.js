import './App.css';
import Calculator from "./components/Calculator"
import { useContext, useState} from 'react';
import {ThemeContext} from './context/ThemeContext';
function App() {
  let [theme,setTheme]=useContext(ThemeContext)
  return (
      <div className={`App ${theme}`}  >
        <Calculator />
      </div>
  );
}

export default App;
