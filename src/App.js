import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import DaisyNavBar from './components/DaisyNavBar';
import Inicio from './components/Inicio';
import ItemDetailContainer from './components/ItemDetailContainer';
//import ItemListContainer from './components/ItemListContainer';
import ItemCategory from './components/ItemCategory';



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
      <Route path="/category/:CatId" element={<ItemCategory/> } />
      <Route path="/item/:Id" element={<ItemDetailContainer/> } />
      <Route path="/Cart" element={<></>} />

      </Routes>
    </div>
    </BrowserRouter>

  );
}

export default App;