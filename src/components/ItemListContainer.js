import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemList from './ItemList';
import { collection, getDocs, getFirestore } from "firebase/firestore"
import Item from "./Item";


const ItemListContainer = ({ greetings }) => {

	const { categoryId } = useParams()

	const [products, setProducts] = useState([])

	//captar datos de firebase
	useEffect(() => {
		const db = getFirestore()
		const Collection = collection(db, 'items')
		getDocs(Collection).then((snapshot) => {
			const productsList = []
			snapshot.docs.forEach((s) => {
				console.log(s.data());
				productsList.push({ id: s.id, ...s.data() })
			})
			console.log(productsList);
			setProducts(productsList)
		})

	}, [])



	return (
		<>
			<div
				className="hero min-h-screen"
				style={{
					backgroundImage: `url("https://mecaluxar.cdnwm.com/img/articulos-de-logistica/tiendas-almacenes-proximidad.1.3.jpg")`,
				}}
			>
				<div className="hero-overlay bg-opacity-60"></div>
				<div className="hero-content text-center text-neutral-content">
					<div className="max-w-md">
						<h1 className="mb-5 text-5xl font-bold">{greetings}</h1>
					</div>
				</div>
			</div>
			<div className="flex h-50 w-50">

				{products.map(prod => {
					if (prod.category == categoryId) {
						return <Item producto={prod} />
					} else if (categoryId == undefined) {
						return <Item producto={prod} />
					}
				})}
			</div>
		</>
	)
}

export default ItemListContainer