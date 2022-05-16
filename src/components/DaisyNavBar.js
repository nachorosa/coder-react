import { Link } from "react-router-dom"
import CartWidget from "./CartWidget"

const DaisyNavBar = () => {
  
    const categorias = [
        {categoria: 'bebidas-con-alcohol', titulo: 'Bebidas Con Alcohol'}, {categoria: 'bebidas-sin-alcohol', titulo: 'Bebidas Sin Alcohol'},
    ]
  
    return (
    
    
        <div className="navbar bg-base-100">
        <div className="flex-1">
            <Link className="btn btn-ghost normal-case text-xl" to={`/`}><button>Tomar - YA</button></Link>
        </div>

        <div className="flex-2">

        <div className="flex-none">
            <ul className="menu menu-horizontal p-0">
                <li tabindex="0">
                    <a className="btn btn-ghost normal-case text-xl">
                    Categorias
                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
                    </a>
                        <ul className="p-2 bg-base-100">
                            {categorias.map(cat => {
                return <li><Link to={`/category/${cat.categoria}`}><button>{cat.titulo}</button></Link></li>
            })}

                        </ul>
                </li>
            </ul>
        </div>
 

        </div>

        <div className="flex-2">
            <a className="btn btn-ghost normal-case text-xl">Contacto</a>
        </div>

        <div className="flex-none">
            <div className="dropdown dropdown-end">

            <CartWidget/>
 
            </div>


        </div>
        </div>





  )
}
export default DaisyNavBar
 