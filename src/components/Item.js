import React from 'react';
import ItemCount from './ItemCount.js';

import './styles/styles.css';

const Item = ({ name, img, price, id, stock }) => {


    return (

            <div className=" card w-96 bg-base-100 shadow-xl">
                <figure><img className='img-card' src={img} alt="" /></figure>
                <div class="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>$ {price} </p>
                    <div className="card-actions justify-end">

                        <ItemCount stock={stock} initial={1} />

                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>



    );
};

export default Item;
