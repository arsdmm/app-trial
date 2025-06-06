import logo from './logo.svg';
import './App.css';
import ButtonComponent from './Components/ButtonComponent';
import CashComponent from './Components/CashComponent';
import RandomComponent from './Components/RandomComponent';
import ClearComponent from './Components/ClearComponent';

function App() {
  return (
 <div style={{ backgroundColor: 'yellow', height: '100vh', padding: '20px' }}>
        <div className='top'>
          <h1>WHE WHE on D'Avenue</h1>
        </div>
      
      <div style={{ display: 'flex', height: '100%' }}>
        <div className='left'>
          <h2>1 часть</h2>
          <button>Кнопка 1</button>
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
                <CashComponent label={"Cash"} />
                <RandomComponent label={"Random"} />
                <ClearComponent label={"Clear"} />
              </div>
        </div>
        <div className='right'>
          <h2>3 часть</h2>
          <button>Кнопка 1</button>
        </div>
      </div>
    </div>
  );
}

export default App;
