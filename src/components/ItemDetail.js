import React, { useEffect, useState } from 'react'
import ItemCount from './ItemCount'
import { productList } from '../data/data.js';
import { Link, useParams } from 'react-router-dom';

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
    
    const [enCarrito , setEnCarrito] = useState(false)

    const onAdd = (count) => {
        setEnCarrito(true)
        console.log(count)
    }

  return (
      <>

        <div className="tienda">

        
            <div className=" card w-96 bg-base-100 shadow-xl">
                <figure><img className='img-card' src={prod.img} alt="" /></figure>
                <div class="card-body">
                    <h2 className="card-title">{prod.name}</h2>
                    <p>$ {prod.price} </p>
                    <p>Stock: {prod.stock}</p>
                    <div className="card-actions justify-end">
                        

                        {enCarrito ? (
                             <div>
                                <p>El producto esta en el Carrito!</p>
                                 <Link to={`/cart`}><button className="btn btn-primary">VER CARRITO</button></Link>
                             </div>
                            ) : (
                                <ItemCount stock={prod.stock} initial={1} onAdd={onAdd} />
                                )}
                                

                        <Link to={`/`}><button className="btn btn-primary">Volver</button></Link>


                    </div>
                </div>
            </div>


        </div>
      </>
  )
}







export default ItemDetail