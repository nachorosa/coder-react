import { addDoc, collection, getFirestore } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { useCartContext } from './context/CartContext'




const Checkout = () => {
    
    const { cart } = useCartContext()
    const [total, setTotal] = useState(0)
    let precioTotal = 0
    
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
         console.log("asd",response.id);
        
        return(
            <h1>holaa</h1>
        )

       
    }



  return (
    <div>
        <h2>FINALIZAR COMPRA!!</h2>
        <form>
            <div>
                <input id="nombre" type="text" placeholder='Nombre' className="btn"/>
            </div>
            <div>
                <input id="apellido" type="text" placeholder='Apellido' className="btn"/>
            </div>
            <div>
                <input id="direccion" type="text" placeholder='Direccion' className="btn"/>
            </div>
            <div>
                <input id="telefono" type="number" placeholder='Telefono' className="btn"/>
            </div>
            <div>
                <input id="email" type="email" placeholder='Email' className="btn"/>
            </div>
        </form>
        <p className="btn">$ {total}</p>
        <button onClick={finalizarCompra} className="btn">FINALIZAR COMPRA</button>

    </div>
  )
}

export default Checkout

