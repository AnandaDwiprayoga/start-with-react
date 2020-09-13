import React , {useState} from 'react';
import './App.css';
import DarkmodeTogle from './components/checkbox-mode';
import Button from "./components/button-counter";
import Label from "./components/label-counter";

const App = () => {
  //variabel in index 0 is the value that always changed
  //variabel in index 1 is the function that to change the variabel
  const [ index, addIndex ] = useState(0);
  const [ isDarkMode, changeMode ] = useState(false);

  const counterAdd = () => {
    addIndex(prevIndex => prevIndex+1);
    // OR addIndex(index + 1);
  };

  const checkboxClicked = () => changeMode(!isDarkMode);

  let AppClass = 'App';
  if(isDarkMode) AppClass += ' dark';

  return (
    <div className={AppClass} > 
      <h1>Hello React</h1>
      <Label index={index}/>
      <Button onCounterAdd={counterAdd}/>
      <DarkmodeTogle onCheckboxClicked={checkboxClicked} />
   </div>
  );
};

export default App;

