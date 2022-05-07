import React from 'react';
import { Link } from 'react-router-dom';
//import ItemCount from './ItemCount.js';

import './styles/styles.css';

const Item = ({ name, img, price, id, stock }) => {


    return (

            <div className=" card w-96 bg-base-100 shadow-xl">
                <figure><img className='img-card' src={img} alt="" /></figure>
                <div class="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>$ {price} </p>
                    <div className="card-actions justify-end">

                        {/* <ItemCount stock={stock} initial={1} /> */}
                        <Link to={`/item/${id}`}><button className="btn btn-primary">VER MAS</button></Link>

                    </div>
                </div>
            </div>



    );
};

export default Item;
