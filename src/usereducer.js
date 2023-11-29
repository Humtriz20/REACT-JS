//we can pass state in html elements by doing this
const [error, setError] = useState(false);
//then we will be rendering html
return (
    <div eror={error} ></div>
    //this div is the holding the state value 
)




//we can change the state by using usestate when we click the button
//but we can use usereducer
//first we will import it first 
import { useReducer } from "react";

// dispatch is for action

    //this is the initial value like the usestate
    const initialState = {
        items :[]
        total : 0
    }

 const cartReducer = (state , action) => {
    //and we will use switch case for this 
    switch(action.type){
        //each case is the function
        case "ADD ITEM" :
            //blocks of code
        const updatedItems  =[...state.items, action.payload];
        const updatedTotal = state.total + action.payload.price;
        return {...state, items:updatedItems, total:updatedTotal }
        default
        return state
    }
 }
    function shoopingCart() {
        const [cartState, dispatch] = useReducer(cartReducer, initialState)
    }
    function addItem(items) {
        dispatch({
            type:'ADD_ITEM', payload:item
        })
    }

    // for usestate
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [post, setPost] = useState({});


    setError(true)
    setLoading(true)
    setPost(data)
    return(
        <div>
            <ul></ul>
        </div>
    )