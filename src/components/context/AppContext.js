import React, { createContext, useContext, useEffect, useState } from "react"
import { collection, getDocs, getFirestore } from "firebase/firestore"


const AppContext = createContext()

export const useAppContext = () => useContext(AppContext)

const AppContextProvider = ({ children }) => {
	const [products, setProducts] = useState([])

    //captar datos de firebase
    useEffect(() => {
        const db = getFirestore ()
        const Collection = collection(db, 'items')
        getDocs( Collection ).then ((snapshot) => { 
            const productsList = []
            snapshot.docs.forEach((s) => { 
            console.log (s.data() );
            productsList.push( {id: s.id, ...s.data()})
        })
        console.log(productsList);
        setProducts ( productsList )
        })

    }, [])
	return (
		<AppContext.Provider value={{ products }}>{children}</AppContext.Provider>
	)
}

export default AppContextProvider
