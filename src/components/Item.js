import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ producto }) => {


	const styles = {
		header: "w-20"
	  }


	return (
		<>
			<div className="card card-compact w-60 bg-base-100 shadow-xl">
 
					<figure className="w-40 ">
						<img src={producto.img} alt="" />
					</figure>
	 
				<div className="card-body">
					<h2 className="card-title">{producto.title}</h2>
					<div className="inline-block align-bottom mr-5">
						<span className="font-bold text-5xl leading-none align-baseline">
							${producto.price}
						</span>
					</div>
					<div className="card-actions justify-center">
						<Link to={`/item/${producto.id}`} className="btn btn-primary">
							Ver más
						</Link>
					</div>
				</div>
			</div>
		</>
	)
}

export default Item
