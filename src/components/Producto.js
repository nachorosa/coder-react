const Producto = ( {name, price} ) => {
  return (
    <div class="card w-96 bg-base-100 shadow-xl">
  <figure><img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" /></figure>
  <div class="card-body">
    <h2 class="card-title">{name}</h2>
    <p>$ {price}</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
    </div>
  )
}
export default Producto