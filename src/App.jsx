import React from 'react';
import './App.css';
import TopTableSection from './TopTableSection';
import BottomTableSection from './BottomTableSection';
import OrderBoard from './OrderBoard';

function App() {
  return (
    <div className="main-bg">
      {/* <div className="counter">카운터</div> */}
      {/* <div className="kitchen">주방</div> */}
      {/* <div className="screen1">screen</div> */}
      {/* <div className="screen2">screen</div> */}
      <div className="table-section">
        <TopTableSection/>
        <BottomTableSection />
      </div>
      
      <OrderBoard />
      
      {/* Add more layout sections and table components as needed */}
    </div>
  );
}

export default App
