import React, { useState } from 'react';
import './App.css';
import ButtonComponent from './Components/ButtonComponent';
import CashComponent from './Components/CashComponent';
import MoneyComponent from './Components/MoneyComponent';
import RandomComponent from './Components/RandomComponent';
import ClearComponent from './Components/ClearComponent';
import MoneyClearComponent from './Components/MoneyClearComponent';

function App() {
  const [selectedAmounts, setSelectedAmounts] = useState([]); // store all cash numbers
  const [selectedNumbers, setSelectedNumbers] = useState([]); // store all numbers
  const [total, setTotal] = useState(0); //total sum after "Cash" clicked

// This function is called when a money amount button is clicked.
// It updates the state by adding the clicked amount to the selectedAmounts array.
const handleMoneyClick = (amount) => {
   if (selectedNumbers.length !== 5) {
    alert("Please select exactly 5 numbers before choosing an amount.");
    return; // If user didn't selected 5 numbers
  }
  setSelectedAmounts((selectedAmounts) => [...selectedAmounts, amount]);
  // The previous selectedAmounts array is spread into a new array.
  // The new amount is appended to the end of this new array.
  // This ensures the state is updated immutably.
};

// This function is called when the "Cash" button is clicked.
// It calculates the total sum of all amounts currently selected.
const handleCashClick = () => {
    if (selectedNumbers.length !== 5) {
    alert("Please select exactly 5 numbers before pressing Cash.");
    return; // if user clicked "Cash" before choosing 5 random numbers
  }
  // Use reduce to sum all values in the selectedAmounts array.
  // currentsum starts at 0 and accumulates the sum as it iterates through the array.
  // nextnumber is the current array element being processed.
  const sum = selectedAmounts.reduce((currentsum, nextnumber) => currentsum + nextnumber, 0);

  // Update the total state with the calculated sum.
  setTotal(sum);
};

// This function is called when the "Clear" button is clicked.
// It resets the selected amounts and total to their initial empty/zero state.
const handleClearMoneyClick = () => {
  setSelectedAmounts([]); // Clear the array of selected amounts.
  setTotal(0);           // Reset the total sum to zero.
};

const handleNumberClick = (number) => {
  // Check if the number is already selected
  const alreadySelected = selectedNumbers.includes(number);

  // If it is, remove it (deselect it)
  if (alreadySelected) {
    const updatedSelection = selectedNumbers.filter((n) => n !== number);
    setSelectedNumbers(updatedSelection);
    return;
  }

  // If already 5 numbers selected, prevent adding more
  if (selectedNumbers.length >= 5) {
    alert("You can only select up to 5 numbers.");
    return;
  }

  // Otherwise, add the new number
  const newSelection = [...selectedNumbers, number];
  setSelectedNumbers(newSelection);
};

const handleClearNumbers = () => {
  setSelectedNumbers([]); // Clear all numbers
};

const handleRandomClick = () => {
  const totalNumbers = 24;     // Total numbers available to choose from (1 to 25)
  const maxSelections = 5;     // Maximum numbers to select randomly

  const numbers = [];          // Initialize empty array to store unique random numbers

  // Loop until we have 5 unique random numbers
  while (numbers.length < maxSelections) {
    // Generate a random number between 1 and 25 (inclusive)
    const randomNumber = Math.floor(Math.random() * totalNumbers) + 1;

    // Check if this random number is NOT already in the array
    if (!numbers.includes(randomNumber)) {
      numbers.push(randomNumber);  // Add the unique random number to the array
    }
    // If number is already included, the loop continues without adding
  }

  // Update the state with the array of 5 unique random numbers
  setSelectedNumbers(numbers);
};

  return (
 <div style={{ backgroundColor: 'yellow', height: '100vh', padding: '20px' }}>
        <div className='top'>
          <h1>WHE WHE on D'Avenue</h1>
        </div>
      
      <div style={{ display: 'flex', height: '100%' }}>
        <div className='left'>
          <div style={{ marginLeft: '14px', marginTop: '14px' }}>
            <img src="https://media.tenor.com/pe-m_zozfOgAAAAM/sweet-bonanza-sweet-fiesta.gif" style={{ width: '300px', height: 'auto' }}/>
          </div>
          <div style={{ marginLeft: '14px', marginTop: '40px' }}>
            <MoneyComponent amount={1} onClick={handleMoneyClick} />
            <MoneyComponent amount={5} onClick={handleMoneyClick} />
            <MoneyComponent amount={10} onClick={handleMoneyClick} />
            <MoneyComponent amount={20} onClick={handleMoneyClick} />
            <MoneyClearComponent onClick={handleClearMoneyClick} />
          </div>
        </div>

        <div className='middle'>
              <div style={{ marginLeft: '40px' }}>
                <ButtonComponent
                  number={1}
                  onClick={handleNumberClick}
                  isSelected={selectedNumbers.includes(1)}
                />
                <ButtonComponent
                  number={2}
                  onClick={handleNumberClick}
                  isSelected={selectedNumbers.includes(2)}
                />
                <ButtonComponent
                  number={3}
                  onClick={handleNumberClick}
                  isSelected={selectedNumbers.includes(3)}
                />
                <ButtonComponent
                  number={4}
                  onClick={handleNumberClick}
                  isSelected={selectedNumbers.includes(4)}
                />
                <ButtonComponent
                  number={5}
                  onClick={handleNumberClick}
                  isSelected={selectedNumbers.includes(5)}
                />
                <ButtonComponent
                  number={6}
                  onClick={handleNumberClick}
                  isSelected={selectedNumbers.includes(6)}
                />
                <ButtonComponent
                  number={7}
                  onClick={handleNumberClick}
                  isSelected={selectedNumbers.includes(7)}
                />
                <ButtonComponent
                  number={8}
                  onClick={handleNumberClick}
                  isSelected={selectedNumbers.includes(8)}
                />
                <ButtonComponent
                  number={9}
                  onClick={handleNumberClick}
                  isSelected={selectedNumbers.includes(9)}
                />
                <ButtonComponent
                  number={10}
                  onClick={handleNumberClick}
                  isSelected={selectedNumbers.includes(10)}
                />
                <ButtonComponent
                  number={11}
                  onClick={handleNumberClick}
                  isSelected={selectedNumbers.includes(11)}
                />
                <ButtonComponent
                  number={12}
                  onClick={handleNumberClick}
                  isSelected={selectedNumbers.includes(12)}
                />
                <ButtonComponent
                  number={13}
                  onClick={handleNumberClick}
                  isSelected={selectedNumbers.includes(13)}
                />
                <ButtonComponent
                  number={14}
                  onClick={handleNumberClick}
                  isSelected={selectedNumbers.includes(14)}
                />
                <ButtonComponent
                  number={15}
                  onClick={handleNumberClick}
                  isSelected={selectedNumbers.includes(15)}
                />
                <ButtonComponent
                  number={16}
                  onClick={handleNumberClick}
                  isSelected={selectedNumbers.includes(16)}
                />
                <ButtonComponent
                  number={17}
                  onClick={handleNumberClick}
                  isSelected={selectedNumbers.includes(17)}
                />
                <ButtonComponent
                  number={18}
                  onClick={handleNumberClick}
                  isSelected={selectedNumbers.includes(18)}
                />
                <ButtonComponent
                  number={19}
                  onClick={handleNumberClick}
                  isSelected={selectedNumbers.includes(19)}
                />
                <ButtonComponent
                  number={20}
                  onClick={handleNumberClick}
                  isSelected={selectedNumbers.includes(20)}
                />
                <ButtonComponent
                  number={21}
                  onClick={handleNumberClick}
                  isSelected={selectedNumbers.includes(21)}
                />
                <ButtonComponent
                  number={22}
                  onClick={handleNumberClick}
                  isSelected={selectedNumbers.includes(22)}
                />
                <ButtonComponent
                  number={23}
                  onClick={handleNumberClick}
                  isSelected={selectedNumbers.includes(23)}
                />
                <ButtonComponent
                  number={24}
                  onClick={handleNumberClick}
                  isSelected={selectedNumbers.includes(24)}
                />
                <CashComponent onClick={handleCashClick} />
                <RandomComponent label={"Random"} onClick={handleRandomClick} />
                <ClearComponent onClick={handleClearNumbers} />
              </div>
        </div>
        <div className='right'>
        <h3>Selected Numbers:</h3>
        <p>{selectedNumbers.sort((a, b) => a - b).join(', ') || 'None'}</p>
        <h2>Result</h2>
        {total !== null ? <p>You selected: ${total}</p> : <p>Nothing is selected</p>}
        </div>
      </div>
    </div>
  );
}

export default App;
