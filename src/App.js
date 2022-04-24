// import logo from './logo.svg';
import './App.css';
import DaisyNavBar from './components/DaisyNavBar';
import FondoPrincipal from './components/FondoPrincipal';
import Producto from './components/Producto';
//import ItemListContainer from './components/ItemListContainer.js';
import CardNew from './components/CardNew';


function App() {

    const styles = {
      header: "text-red-600 bg-slate-300 text-4xl"
    }

  return (
    <div className="App">

    <DaisyNavBar/>

    <h1 className={styles.header}>TOMAR-YA!</h1>
    <FondoPrincipal/>
 
    {/* <ItemListContainer>
    <Producto name='nike' price='35000'/>
    <Producto name='adidas' price='30000'/>
    <Producto name='rebook' price='27000'/>
    </ItemListContainer> */}


    <CardNew otroComponente={Producto}></CardNew>

    </div>

  );
}

export default App;
