import React, { Component, useState } from 'react';
// import { ButtonLinkPrimary } from 'public-mobile-styleguide/src/Buttons/ButtonLinkPrimary';

const buttons = [0, 1, 2, 3, 4, 5, 6, 7, 8, ,9, '+', '-', 'clear', '=']

 const Calculator = () => {

  const [operation, keepTrackOperation] = useState([])

  const [calculatorView, updateCalculate] = useState(0)

  const calculate = (item) => {

    if (typeof item === 'number') {
      // add on next numbers
      updateCalculate(parseInt(`${calculatorView}${item}`))
      // keep track of the current operation and the new ones being pressed
      keepTrackOperation([
        ...operation,
        item]
        )
    } else if (item === 'clear') {
      // reset calculator view
      updateCalculate(0)
      // clear the operation
      keepTrackOperation([])
    } else if (item === '+' || item === '-') {
      
      keepTrackOperation([
        ...operation,
        item]
        )  
        // update view to be the item
        updateCalculate(item)
    } else if (item === '=') {
      const result = eval(operation.join(''))
      updateCalculate(result)
    }


  }

    return (
      <div className="App">
         {buttons.map((button) => {
        return (
        <button onClick={() => calculate(button)}>
         {button}
        </button>
        )
      })}
      <p> Result: </p>
      {calculatorView}
      {/* <p> operation: </p>
      {operation} */}
      </div>
   
    );
  
}

export default Calculator



