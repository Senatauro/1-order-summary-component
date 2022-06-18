import imgHeader from './images/illustration-hero.svg';
import imgMusic from './images/icon-music.svg';
import './App.css';

function App() {
  return (
    <div className="container">
      <div className='order-summary'>
        <img src={imgHeader} alt="Illustration of a woman listening to music while dancing with a city in the background" />
        <div className='order-summary-info'>
          <h1 className='order-summary-title'>Order summary</h1>
          
          <p className='order-summary-desc'>You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!</p>
          
          <div className='order-summary-plan-button'>
            <img src={imgMusic} alt="Icon of a music note" />
            <div className='order-summary-plan-button-info'>
              <p className='order-summary-plan-button-plan'>Annual Plan</p>
              <p className='order-summary-plan-button-price'>$59,99/year</p>
            </div>
            <p className='order-summary-plan-button-change'>Change</p>
          </div>

          <button className="order-summary-payment-button">
            Proceed to Payment
          </button>
          <p className='order-summary-cancel'>
            Cancel Order
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
