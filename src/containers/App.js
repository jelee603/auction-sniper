import './App.css';
import React, { useState } from 'react';
import AuctionList from '../components/AuctionList';
import AuctionItem from '../components/AuctionItem';

function App() {
  const [content, setContent] = useState([]);
  const handleNew = (props) => {
    const _uid = `item_${Math.round(props.timeStamp)}`;
    const newElement = { _uid, component: 'auctionItem' };
    setContent((oldArray) => [...oldArray, newElement]);
  };
  return (
    <div className="App">
      <div className="App-header">
        <AuctionList />
      </div>
      <div className="App-body">
        <div>
          <button type="button" onClick={handleNew}>
            New Sniper
          </button>
        </div>
        <div className="ContentBox">
          {content.map((v, index) => {
            return <AuctionItem key={index} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
