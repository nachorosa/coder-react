// import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import DaisyNavBar from './components/DaisyNavBar';
// import FondoPrincipal from './components/FondoPrincipal';
import Inicio from './components/Inicio';
import ItemDetail from './components/ItemDetail';
import ItemDetailContainer from './components/ItemDetailContainer';
// import Producto from './components/Producto';
// import ItemListContainer from './components/ItemListContainer.js';
//import CardNew from './components/CardNew';


function App() {

    const styles = {
      header: "text-red-600 bg-slate-300 text-4xl"
    }

  return (

    <BrowserRouter>
    
    <div className="App">
        <DaisyNavBar/>
 
        <h1 className={styles.header}>TOMAR-YA!</h1>
      
      <Routes>
        
        
      <Route path="/" element={<Inicio/> } />
      <Route path="/item/:Id" element={<ItemDetailContainer/> } />
 

      </Routes>
    </div>
    </BrowserRouter>

  );
}

export default App;
