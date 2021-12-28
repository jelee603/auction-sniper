import React from 'react';

function List() {
  const data = [
    {
      itemCode: 'first-item',
      maxBid: 123,
    },
    {
      itemCode: 'another-item',
      maxBid: 10000,
    },
  ];

  const itemList = data.map(({ itemCode, maxBid }, number) => (
    <ul key={number}>
      <li>{itemCode}</li>
      <li>{maxBid}</li>
    </ul>
  ));

  return <div>{itemList}</div>;
}

export default List;
