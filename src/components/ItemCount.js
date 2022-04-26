import React from 'react';
import { useState } from 'react';


const ItemCount = ({ initial, stock}) => {
  //hook de estado
  const [number, setNumber] = useState(initial);

  const addProduct = (num) => {
    setNumber(number + num);
  };

  return (
    <div>
      <div>
        <button
          onClick={() => addProduct(-1)}
          disabled={number === initial ? true : null}
        >
          -
        </button>
        <span>{number}</span>
        <button
          onClick={() => addProduct(+1)}
          disabled={number === stock ? true : null}
        >
          +
        </button>
      </div>

      <button
        disabled={stock === 0 ? true : null}
      >
      </button>
    </div>
  );
};

export default ItemCount;
