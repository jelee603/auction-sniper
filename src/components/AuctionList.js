import React, { useState } from 'react';
import bid from '../utils/GetAuctionBid';

const initData = [
  {
    itemCode: 'first-item',
    maxBid: 123,
  },
  {
    itemCode: 'another-item',
    maxBid: 10000,
  },
];

function AuctionList() {
  const [data, setData] = useState(initData);

  function Observer1(result) {
    console.log(`${result} Observer 1 Completed`);
    setData((oldArray) => [...overWrite(oldArray, result)]);
  }

  function overWrite(oldArray, result) {
    const item = JSON.parse(result);
    oldArray.forEach(
      (oldItem) =>
        (oldItem.maxBid =
          oldItem.itemCode === item.itemCode
            ? Number(item.maxBid)
            : Number(oldItem.maxBid))
    );
    return oldArray;
  }

  bid.subscribe(Observer1);

  const itemList = data.map(({ itemCode, maxBid }, index) => (
    <ul key={index}>
      <li>{itemCode}</li>
      <li>{maxBid}</li>
    </ul>
  ));

  return <div>{itemList}</div>;
}

export default AuctionList;
