import { Link } from "react-router-dom"
import CartWidget from "./CartWidget"

const DaisyNavBar = () => {
  
    const categorias = [
        {categoria: 'bebidas-con-alcohol', titulo: 'Bebidas Con Alcohol'}, {categoria: 'bebidas-sin-alcohol', titulo: 'Bebidas Sin Alcohol'},
    ]
  
    return (
    
    
        <div className="navbar bg-base-100">
        <div className="flex-1">
            <a className="btn btn-ghost normal-case text-xl">Tomar - YA</a>
        </div>

        <div className="flex-2">

        <div class="flex-none">
            <ul class="menu menu-horizontal p-0">
                <li tabindex="0">
                    <a className="btn btn-ghost normal-case text-xl">
                    Categorias
                    <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
                    </a>
                        <ul class="p-2 bg-base-100">
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

            <div tabindex="0" className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
                <div className="card-body">
                <span className="font-bold text-lg">8 Items</span>
                <span className="text-info">Subtotal: $999</span>
                <div className="card-actions">
                    <button className="btn btn-primary btn-block">View cart</button>
                </div>
                </div>
            </div>
            </div>

            <div className="dropdown dropdown-end">
            <label tabindex="0" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                <img src="https://api.lorem.space/image/face?hash=33791" />
                </div>
            </label>
            <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                <li>
                <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                </a>
                </li>
                <li><a>Settings</a></li>
                <li><a>Logout</a></li>
            </ul>
            </div>
        </div>
        </div>





  )
}
export default DaisyNavBar
 