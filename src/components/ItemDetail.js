import React, { useEffect, useState } from 'react'
import ItemCount from './ItemCount'
import { productList } from '../data/data.js';
import { useParams } from 'react-router-dom';

const ItemDetail = () => {

    const {Id} = useParams()
    const [prod, setProd] = useState({})
    
    useEffect(() => {
        const getProducts = new Promise((resolve, reject) => {
            setTimeout(() => {
              resolve(productList);
            }, 2000);
        });
    
        getProducts.then(resutlt => {
            productList.map(product => {
                if(product.id == Id){
                    setProd(product)
                }
            })
        })
    }, [Id])
    

  return (
      <>

        
            <div className=" card w-96 bg-base-100 shadow-xl">
                <figure><img className='img-card' src={prod.img} alt="" /></figure>
                <div class="card-body">
                    <h2 className="card-title">{prod.name}</h2>
                    <p>$ {prod.price} </p>
                    <div className="card-actions justify-end">

                        <ItemCount stock={prod.stock} initial={1} />

                        <button className="btn btn-primary">Buy Now</button>


                    </div>
                </div>
            </div>


      </>
  )
}

export default ItemDetail