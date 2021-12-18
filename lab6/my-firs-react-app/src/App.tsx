import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import PhraseGiver from './PhraseGiver';
import Arrays from './Arrays';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>--------------------- Счётчики ---------------------</h3>
        <Counter initialValue={5} />
        <h3>***</h3>
        <Counter initialValue={50} step={10}/>
        <h3>***</h3>
        <Counter initialValue={500} step={100}/>
        <h3>-----------------------------------------------------</h3>
        <h3>--------------- Предложениеперестановщик ------------</h3>
        <PhraseGiver first='один' second='два' third='три' />
        <h3>------------------------------------------------------------------</h3>
        <h3>--------------- Массив ------------</h3>
        <Arrays texts={['да ', "Это я :З" ]} />
        <h3>---------------------------------------</h3>
      </header>
    </div>
  );
}

export default App;
