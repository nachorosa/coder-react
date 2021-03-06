import { addDoc, collection, getFirestore } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { useCartContext } from './context/CartContext'
import swal from 'sweetalert';

const Checkout = () => {
    
    const { cart } = useCartContext()
    const [total, setTotal] = useState(0)
    let precioTotal = 0

    let guardarid = ''
    
    useEffect(() => {
        cart.forEach(prod => {
            precioTotal = precioTotal + (prod.price * prod.quantity)
            setTotal(precioTotal)
        }); 
	})

    

    const finalizarCompra = async() => {

        const comprador = {
            name: document.getElementById('nombre').value,
            phone: document.getElementById('telefono').value,
            email: document.getElementById('email').value
          }

          const miCarrito = cart.map( ({id, title, price, quantity}) => ({id, title, price, quantity}) )

          const compraFinalizada = {
            comprador: comprador,
            items: miCarrito,
            total: total
          }

        console.log('comprafinalizada', compraFinalizada)


        const db = getFirestore();
        const ordenCollection = collection(db, 'orden');
    
        const response = await addDoc(ordenCollection, compraFinalizada)
        
        guardarid = response.id;


        swal("la id de tu compra es: ", response.id);


        const btn = document.getElementById('finalizar')
        btn.setAttribute("disabled", true)

    }



  return (
    <div>
        <form className='hero  bg-base-200'>
            <div>

                <div className='hero-content flex-col lg:flex-row'>
                    <input id="nombre" type="text" placeholder='Nombre' className="btn"/>
                </div>
                <div className='hero-content flex-col lg:flex-row'>
                    <input id="apellido" type="text" placeholder='Apellido' className="btn"/>
                </div>
                <div className='hero-content flex-col lg:flex-row'>
                    <input id="direccion" type="text" placeholder='Direccion' className="btn"/>
                </div>
                <div className='hero-content flex-col lg:flex-row'>
                    <input id="telefono" type="number" placeholder='Telefono' className="btn"/>
                </div>
                <div className='hero-content flex-col lg:flex-row'>
                    <input id="email" type="email" placeholder='Email' className="btn"/>
                </div>
            </div>
        </form>
       

        

        <div className="hero ">
<div className="hero-content flex-col lg:flex-row">
     <p className="btn">$ {total}</p>
    { total > 0 ? <button id="finalizar" onClick={() => finalizarCompra()} className="btn">FINALIZAR COMPRA</button> : "" }
            <button onClick={() => {
    swal("la id de tu compra es: ", guardarid);
}} className="btn">IdCompra</button>
</div>
</div>




    </div>
  )
}

export default Checkout



