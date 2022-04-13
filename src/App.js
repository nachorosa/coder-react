import logo from './logo.svg';
import './App.css';
import DaisyNavBar from './components/DaisyNavBar';

function App() {

    const styles = {

      header: "text-red-600 bg-slate-300 text-4xl line-through"

    }



  return (
    <div className="App">

    <DaisyNavBar/>

    <h1 className={styles.header}>TIENDA DEL FUTURO EN PROGRESO!</h1>

    </div>

  );
}

export default App;
