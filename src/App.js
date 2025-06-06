import React, { useState } from 'react';
import './App.css';
import ButtonComponent from './Components/ButtonComponent';
import CashComponent from './Components/CashComponent';
import MoneyComponent from './Components/MoneyComponent';
import RandomComponent from './Components/RandomComponent';
import ClearComponent from './Components/ClearComponent';
import MoneyClearComponent from './Components/MoneyClearComponent';

function App() {
  const [selectedAmounts, setSelectedAmounts] = useState([]);
  const [total, setTotal] = useState(0);

// This function is called when a money amount button is clicked.
// It updates the state by adding the clicked amount to the selectedAmounts array.
const handleMoneyClick = (amount) => {
  setSelectedAmounts((selectedAmounts) => [...selectedAmounts, amount]);
  // - The previous selectedAmounts array is spread into a new array.
  // - The new amount is appended to the end of this new array.
  // - This ensures the state is updated immutably.
};

// This function is called when the "Cash" button is clicked.
// It calculates the total sum of all amounts currently selected.
const handleCashClick = () => {
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
                <ButtonComponent number={1} />
                <ButtonComponent number={2} />
                <ButtonComponent number={3} />
                <ButtonComponent number={4} />
                <ButtonComponent number={5} />
                <ButtonComponent number={6} />
                <ButtonComponent number={7} />
                <ButtonComponent number={8} />
                <ButtonComponent number={9} />
                <ButtonComponent number={10} />
                <ButtonComponent number={11} />
                <ButtonComponent number={12} />
                <ButtonComponent number={13} />
                <ButtonComponent number={14} />
                <ButtonComponent number={15} />
                <ButtonComponent number={16} />
                <ButtonComponent number={17} />
                <ButtonComponent number={18} />
                <ButtonComponent number={19} />
                <ButtonComponent number={20} />
                <ButtonComponent number={21} />
                <ButtonComponent number={23} />
                <ButtonComponent number={24} />
                <ButtonComponent number={25} />
                <CashComponent onClick={handleCashClick} />
                <RandomComponent label={"Random"} />
                <ClearComponent label={"Clear"} />
              </div>
        </div>
        <div className='right'>
        <h2>Result</h2>
        {total !== null ? <p>You selected: ${total}</p> : <p>Nothing is selected</p>}
        </div>
      </div>
    </div>
  );
}

export default App;
