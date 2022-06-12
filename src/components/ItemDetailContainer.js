import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import { collection, getDocs, getFirestore } from "firebase/firestore"
import ItemCount from './ItemCount'

const ItemDetailContainer = () => {
	
	const [inCart, setIncart] = useState(false)

    const onAdd = (count) => {
      setIncart(true)
      console.log(count);
    }

	const [products, setProducts] = useState([])
    const {id} = useParams()

    useEffect(() => {
      const db = getFirestore()
      const itemsCollection = collection(db, "items")
      getDocs( itemsCollection ).then ( snapshop =>{
          const productsList = []
          snapshop.docs.forEach( s => { 
              productsList.push ( { id: s.id, ...s.data()} )
           })
           setProducts( productsList )
      })
    }, [])
	


	return (
        <>
            {
                products.map(prod => {
                    console.log(prod);
                    if(id == prod.id){
                    return <div>


            <div className="hero  bg-base-200">
				<div className="hero-content flex-col lg:flex-row">
					<img
						src={prod.img}
						className="max-w-sm rounded-lg shadow-2xl"
					/>
					<div>
						<h1 className="text-5xl font-bold">{prod.title}</h1>
                        <p className="py-6">PRECIO: {prod.price}</p>
                                    {inCart ? (
                                        <div>
                                        <p>El producto esta en el Carrito!</p>
                                        <Link to={`/`}><button className="btn btn-primary">CONTINUAR COMPRANDO</button></Link>
                                        <Link to={`/cart`}><button className="btn btn-primary">VER CARRITO</button></Link>
                                        </div>
                                        ) : (
                                        <div> 
                                        <ItemCount stock={prod.stock} initial={1} id={prod.id} onAdd={onAdd}/>
                                        </div>                 
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                    }
                })
            }
        </>
    )
}

export default ItemDetailContainer