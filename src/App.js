import { BrowserRouter, Route, Routes } from "react-router-dom"
import AppContextProvider from './components/context/AppContext';
import CartContextProvider from './components/context/CartContext';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import DaisyNavBar from "./components/DaisyNavBar";


function App() {
	return (
		<>
			<AppContextProvider>
				<CartContextProvider>
					<BrowserRouter>
          <DaisyNavBar/>
						<Routes>
							<Route
								path="/"
								element={<ItemListContainer greetings={"Tienda-Ya"} />}
							/>
							<Route
								path="/category/:categoryId"
								element={<ItemListContainer />}
							/>
							<Route path="/item/:id" element={<ItemDetailContainer />} />
						</Routes>
					</BrowserRouter>
				</CartContextProvider>
			</AppContextProvider>
		</>
	)
}

export default App
