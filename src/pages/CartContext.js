//context API means passing data 
import {createContext,useState } from "react"
//then we will name a varaible to hold the createContext
const CartContext = createContext()

//we will export a function called CartProvider 
//the CartProvider will be used to wrap the whole components in our application 
//so that we can acess the item in any application
export default CartProvider({children}){
    //we can still create a usestate function and also passed it too
    const [item, setitem] = useState([]);
    
    const addToCart=()=>{

    }
    return(
        <CartContext.Provider value={{item addToCart}}>//item and addTocart will be passed too
            {children}
        </CartContext.Provider>
        //we will import the CartContext and useContext in any component if we want to use the CartContext
    )
}

//then we export it as well
export default CartContext;