import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAppContext } from './context/AppContext';
import { useCartContext } from './context/CartContext';


const ItemCount = ({ stock, onAdd, id }) => {
	const [count, setCount] = useState(1)

	const { addToCart } = useCartContext()
	const { products } = useAppContext()

	const handleAdd = () => {
		if (count < stock) {
			setCount(count + 1)
		}
	}
	const handleRemove = () => {
		if (count > 1) {
			setCount(count - 1)
		}
	}

	const handleClick = (id, cantidad) => {
		const findProduct = products.find((producto) => producto.id === id)

		if (!findProduct) {
			alert("Error en la base de datos")
			return
		}

		addToCart(findProduct, cantidad)
		onAdd(count)
	}

	return (
		<>
			<div className="flex gap-4 mt-4">
				<div className="flex flex-row">
					<button className="btn " onClick={handleRemove}>
						<i className="fas fa-minus">-</i>
					</button>
					<label className="alert alert-white">{count}</label>
					<button className="btn " onClick={handleAdd}>
						<i className="fas fa-plus">+</i>
					</button>
				</div>
				<div>
					<button className="btn bg-primary text-white btn-block " onClick={() => handleClick(id, count)} > Agregar al Carrito </button>
					<br/>
					<Link to={`/`}><button className="btn btn-primary">CONTINUAR COMPRANDO</button></Link>

				</div>
			</div>
		</>
	)
}

export default ItemCount
