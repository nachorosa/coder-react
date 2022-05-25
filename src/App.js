import { BrowserRouter, Route, Routes } from "react-router-dom"
import AppContextProvider from './components/context/AppContext';
import CartContextProvider from './components/context/CartContext';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import DaisyNavBar from "./components/DaisyNavBar";
import Cart from "./components/Cart";

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyC8LyYVU4fcg_IuyrvzqqejjcHmMniLRv0",
  authDomain: "coderhouse-mitienda.firebaseapp.com",
  projectId: "coderhouse-mitienda",
  storageBucket: "coderhouse-mitienda.appspot.com",
  messagingSenderId: "438430070869",
  appId: "1:438430070869:web:2656d8f3d50091b8d5fcdc",
  measurementId: "G-TTNG72VKWD"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
	return (
		<>
			<AppContextProvider>
				<CartContextProvider>
					<BrowserRouter>
          <DaisyNavBar/>
						<Routes>
							<Route path="/" element={<ItemListContainer greetings={"Tienda-Ya"} />}/>
							<Route path="/category/:categoryId" element={<ItemListContainer />}/>
							<Route path="/item/:id" element={<ItemDetailContainer />} />
							<Route path="/cart" element={<Cart/>} />
						</Routes>
					</BrowserRouter>
				</CartContextProvider>
			</AppContextProvider>
		</>
	)
}

export default App
