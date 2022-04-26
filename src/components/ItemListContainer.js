// const Tienda = ( {children} ) => {
//   return (
//     <div className="tienda">
//     Empieza
//         {children}
//     Termina
//     </div>
//   )
// }
// export default Tienda

// const ItemListContainer = (props) => {
//   return (
    
//     <>
//       <div>Componente CardNew</div>
//       {props.nuevoProducto({name='nike' price='35000'})}
//     </>
    
//   )
// }
// export default ItemListContainer

// const ItemListContainer = (props) => {
//     return (
//       <>
//           <div className="tienda" >
//               {props.otroComponente({name:"coca", price: 242 })}
//               {props.otroComponente({name:"pepsi", price: 240 })}
//               {props.otroComponente({name:"agua", price: 180 })}
//               {props.otroComponente({name:"cerveza", price: 270 })}
//           </div>
//       </>
//     )
//   }
//   export default ItemListContainer


import React from 'react';
import ItemList from './ItemList';


const ItemListContainer = () => {
  return (
    <section>
      <h2 >Productos</h2>
      <ItemList />
    </section>
  );
};

export default ItemListContainer;
