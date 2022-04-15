import CartWidget from "./CartWidget"

const DaisyNavBar = () => {
  return (
    
    
        <div className="navbar bg-base-100">
        <div className="flex-1">
            <a className="btn btn-ghost normal-case text-xl">TiendaDelFuturo</a>
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