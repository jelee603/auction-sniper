import './AuctionItem.css';
import React, { useRef } from 'react';
import bid from '../utils/GetAuctionBid';

function AuctionItem() {
  const itemCodeRef = useRef(null);
  const itemMaximumBidRef = useRef(null);
  const handleCancel = (props) => {};
  const handleNew = (props) => {
    const item = {
      itemCode: itemCodeRef.current.value,
      maxBid: itemMaximumBidRef.current.value,
    };
    const jsonString = JSON.stringify(item);
    bid.publish(jsonString);
  };

  return (
    <div className="bgPopup">
      <div className="Content">
        <label>Item Code</label>
        <input name="ItemCode" type="text" ref={itemCodeRef}></input>
      </div>
      <div className="Content">
        <label>Maximum Bid</label>
        <input name="MaximumBid" type="text" ref={itemMaximumBidRef}></input>
      </div>
      <div className="Content">
        <button type="button" onClick={handleCancel}>
          Cancel
        </button>
        <button type="button" onClick={handleNew}>
          Start Sniping
        </button>
      </div>
    </div>
  );
}

export default AuctionItem;
