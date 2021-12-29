import './App.css';
import React, { useState } from 'react';
import List from './List';

function App() {
  const [showModal, setShowModal] = useState(false);
  const handleNew = (props) => {
    setShowModal(true);
  };
  const handleCancel = (props) => {
    setShowModal(false);
  };
  const Modal = (props) => {
    if (showModal) {
      return (
        <div className="bgPopup">
          <div className="Content">
            <label>Item Code</label>
            <input name="ItemCode" type="text"></input>
          </div>
          <div className="Content">
            <label>Maximum Bid</label>
            <input name="MaximumBid" type="text"></input>
          </div>
          <div className="Content">
            <button type="button" onClick={handleCancel}>
              Cancel
            </button>
            <button type="button">Start Sniping</button>
          </div>
        </div>
      );
    }
    return (
      <button type="button" onClick={handleNew}>
        New Sniper
      </button>
    );
  };
  return (
    <div className="App">
      <div className="App-header">
        <List />
      </div>
      <div className="App-body">
        <Modal showModal={false} />
      </div>
    </div>
  );
}

export default App;
