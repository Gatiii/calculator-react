import './style.css';
import React, { useState } from 'react';

function App() {
  const [result, setResult] = useState("");

  const handleClick = (e) => {
    setResult(result.concat(e.target.value));
  }

  const clear = () => {
    setResult("");
  }

  const equal = () => {
    setResult(eval(result));
  }

  const oneBack = () => {
    setResult(result.slice(0, -1));
  }

  const ops = ['+', '-', '*', '/', '.'];

  const operators = value => {
    if(ops.includes(value) && result === '' || ops.includes(value) && ops.includes(result.slice(-1))) {
      return;
    }
    setResult(result + value);
  }

  return (
    <div class="container">
        <div class="result">
            <input type="text" value={result || "0"} class="result-output" disabled></input>
        </div>
        <div class="keys">
            <button onClick={clear} class="buttonn" id='AC'>AC</button>
            <button onClick={oneBack} class="buttonn">C</button>
            <button onClick={() => operators('+')} value="+" class="buttonn">+</button>
            <button onClick={() => operators('-')} value="-" class="buttonn">-</button>
            <button onClick={handleClick} value="7" class="buttonn">7</button>
            <button onClick={handleClick} value="8" class="buttonn">8</button>
            <button onClick={handleClick} value="9" class="buttonn">9</button>
            <button onClick={() => operators('/')} value="/" class="buttonn">&divide;</button>
            <button onClick={handleClick} value="4" class="buttonn">4</button>
            <button onClick={handleClick} value="5" class="buttonn">5</button>
            <button onClick={handleClick} value="6" class="buttonn">6</button>
            <button onClick={equal} class="buttonn" id='result'>=</button>
            <button onClick={handleClick} value="1" class="buttonn">1</button>
            <button onClick={handleClick} value="2" class="buttonn">2</button>
            <button onClick={handleClick} value="3" class="buttonn">3</button>
            <button onClick={() => operators('.')} value="." class="buttonn">.</button>
            <button onClick={() => operators('*')} value="*" class="buttonn">&times;</button>
            <button onClick={handleClick} value="0" class="buttonn">0</button>
        </div>
    </div>
  )
}

export default App;
