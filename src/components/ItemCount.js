import { useState } from "react";

const Contador = () => {
    console.log("Aqui hay un render del componente Contador")
    const [count, setCount] = useState(1)

    const addHandler = () => {
        console.log("Se esta sumando")
        setCount(count + 1)
    }

    const resHandler = () => {
        console.log("Se esta restando")
        setCount(count - 1)

        if (count === 1 ){
          setCount(1)
        }

    }

  return (
    <>
        <div>
        <button onClick={resHandler}> - </button>
        <strong> {count} </strong>
        <button onClick={addHandler}> + </button>
        </div>
    </>
  )
}
export default Contador