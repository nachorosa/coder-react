import React, { useEffect, useState } from 'react'
import { Link} from 'react-router-dom';
import ItemCount from './ItemCount'
import { collection, getDocs, getFirestore } from "firebase/firestore"

const ItemDetail = ({ producto }) => {
	const { title, price, stock, img, description, category, id } =
		producto

	const [terminar, setTerminar] = useState(false)

	const onAdd = (count) => {
		setTerminar(true)
		console.log(count)
	}

	// const [products, setProducts] = useState([])

    // //captar datos de firebase
    // useEffect(() => {
    //     const db = getFirestore ()
    //     const Collection = collection(db, 'items')
    //     getDocs( Collection ).then ((snapshot) => { 
    //         const productsList = []
    //         snapshot.docs.forEach((s) => { 
    //         console.log (s.data() );
    //         productsList.push( {id: s.id, ...s.data()})
    //     })
    //     console.log(productsList);
    //     setProducts ( productsList )
    //     })

    // }, [])

	return (
		<>
			<div className="hero  bg-base-200">
				<div className="hero-content flex-col lg:flex-row">
					<img
						src={img}
						className="max-w-sm rounded-lg shadow-2xl"
						alt={`${category}, ${title}`}
					/>
					<div>
						<h1 className="text-5xl font-bold">{title}</h1>
						<p className="py-6">{description}</p>
						<p className="py-6">Stock: {stock}</p>
						<div className="inline-block align-bottom mr-5">
							<span className="font-bold text-5xl leading-none align-baseline">
								${price}
							</span>
							{terminar ? (
								<Link to="/cart" className="btn bg-primary text-white btn-block ">VER CARRITO</Link>
							) : (
								<ItemCount stock={stock} onAdd={onAdd} id={id} />
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
