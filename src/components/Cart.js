import { addDoc, collection, getFirestore } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useCartContext } from './context/CartContext';

const Cart = () => {

    const { cart, deleteFromCart } = useCartContext()
    const [total, setTotal] = useState(0)
    let precioTotal = 0

    useEffect(() => {

        if(cart.length == 0){
            setTotal(0)
        }

        cart.forEach(prod => {
            precioTotal = precioTotal + (prod.price * prod.quantity)
            setTotal(precioTotal)
        }); 
	})

    const eliminar = (producto) => {
        deleteFromCart(producto)
    }


    return (
    <div>
        <div className="productos">
            {
            cart.length == 0 ? <Link to={`/`}><button className="btn btn-primary">Volver</button></Link> 
            :
            cart.map(prod => {
                return<div className="hero  bg-base-200">
				<div className="hero-content flex-col lg:flex-row">
					<img
						src={prod.img}
						className="max-w-sm rounded-lg shadow-2xl"
					/>
					<div>
						<h1 className="text-5xl font-bold">{prod.title}</h1>
						<p className="py-6">CANTIDAD: {prod.quantity}</p>
                        <p className="py-6">PRECIO: {prod.price}</p>
						<div className="inline-block align-bottom mr-5">
                            <button onClick={() => eliminar(prod)} className="btn btn-primary">Eliminar</button>
						</div>
					</div>
				</div>
			</div>
                
            })}


                <div className="hero ">
                    <div className="hero-content flex-col lg:flex-row">
                        <Link to={`/`}><button className="btn">CONTINUAR COMPRANDO</button></Link> 
                        <button className="btn">TOTAL: ${total}</button>
                        { total > 0 ? <Link to={`/checkout`}><button className="btn">CHECKOUT</button></Link> : "" }
                    </div>
				</div>

        </div>
    </div>
  )
}

export default Cart