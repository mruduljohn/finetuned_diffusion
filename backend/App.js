import React, { useState } from 'react';

// Importing necessary modules

// Calculator component
function App() {
    // State variables for input and result
    const [input, setInput] = useState('');
    const [result, setResult] = useState('');

    // Function to handle button clicks
    const handleClick = (value) => {
        if (value === '=') {
            // Evaluate the expression and update the result
            try {
                setResult(eval(input));
            } catch (error) {
                setResult('Error');
            }
        } else if (value === 'C') {
            // Clear the input and result
            setInput('');
            setResult('');
        } else {
            // Append the clicked value to the input
            setInput(input + value);
        }
    };

    return (
        <div className="calculator">
            <input type="text" value={input} readOnly />
            <input type="text" value={result} readOnly />
            <div className="buttons">
                <button onClick={() => handleClick('7')}>7</button>
                <button onClick={() => handleClick('8')}>8</button>
                <button onClick={() => handleClick('9')}>9</button>
                <button onClick={() => handleClick('/')}>/</button>
                <button onClick={() => handleClick('4')}>4</button>
                <button onClick={() => handleClick('5')}>5</button>
                <button onClick={() => handleClick('6')}>6</button>
                <button onClick={() => handleClick('*')}>*</button>
                <button onClick={() => handleClick('1')}>1</button>
                <button onClick={() => handleClick('2')}>2</button>
                <button onClick={() => handleClick('3')}>3</button>
                <button onClick={() => handleClick('-')}>-</button>
                <button onClick={() => handleClick('0')}>0</button>
                <button onClick={() => handleClick('.')}>.</button>
                <button onClick={() => handleClick('=')}>=</button>
                <button onClick={() => handleClick('+')}>+</button>
                <button onClick={() => handleClick('C')}>C</button>
            </div>
        </div>
    );
}

export default App;