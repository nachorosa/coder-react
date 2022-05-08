import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getItem } from '../data/data'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {
	const [product, setProduct] = useState({})
	const { id } = useParams()

	useEffect(() => {
		if (id === undefined) {
			getItem().then((resp) => setProduct(resp))
		} else {
			getItem().then((resp) => setProduct(resp[id]))
		}
	}, [id])
	return (
		<>
			<div className="container mx-auto my-8 max-w-4xl h-screen">
				<ItemDetail producto={product} />
			</div>
		</>
	)
}

export default ItemDetailContainer
