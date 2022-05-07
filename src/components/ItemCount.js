import React from 'react';
import { useState } from 'react';


const ItemCount = ({ initial, stock, onAdd}) => {
  //hook de estado
  const [number, setNumber] = useState(initial);

  const addProduct = (num) => {
    setNumber(number + num);
  };

  return (
    <div>
      <div>
        <button className="btn btn-primary" 
          onClick={() => addProduct(-1)}
          disabled={number === initial ? true : null}
        >
          -
        </button>
        <span>{number}</span>
        <button className="btn btn-primary" 
          onClick={() => addProduct(+1)}
          disabled={number === stock ? true : null}
        >
          +
        </button>
      </div>

      <button className="btn btn-primary" 
        disabled={stock === 0 ? true : null}
        onClick={() => onAdd(number)}
        >
        Añadir al Carrito
      </button>
    </div>
  );
};

export default ItemCount;
