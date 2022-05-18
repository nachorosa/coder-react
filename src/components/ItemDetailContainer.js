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
                        <div className='itemDetail'>
                            <div className="itemDetail_content shadow-2xl flex flex-col">
                                <div className='mb-2'>
                                    <ul className='mb-2'>
                                    <li>{prod.id}</li>
                                    <li>{prod.title}</li>
                                    <li>{prod.price}</li>
                                    <li>{prod.category}</li>
                                    <li><img src={prod.img} alt="Shoes"/></li>
                                    </ul>
                                    {inCart ? (
                                        <div>
                                        <p>El producto esta en el Carrito!</p>
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
