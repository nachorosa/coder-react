import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import Item from './Item';
import { productList } from '../data/data.js';

const ItemCategory = () => {

  const {CatId} = useParams()
    
  
  return (
    <div className="tienda">
    {

            productList.map((product) => {
            if(product.categoria == CatId){

                return (
                <div key={product.id}>
                <Item
                name={product.name}
                img={product.img}
                price={product.price}
                stock={product.stock}
                id={product.id}
                categoria={product.categoria}
                />
                </div>
            );
            
        }
        })


    }
    </div>
  )
}

export default ItemCategory