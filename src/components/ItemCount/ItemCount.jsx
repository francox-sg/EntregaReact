import { useState } from "react"

const ItemCount = ({stock, onAdd})=>{

    const [count, setCount] = useState(1)

    const decrementar = ()=>{
        count>1 ? setCount(prev=>prev-1): null
    }

    const incrementar = ()=>{
        count<stock ? setCount(prev=>prev+1): null
    }

    return(
        <div style={{marginTop:15}}>
            <p style={{fontSize:25}}>Cantidad: {count}</p>
            <button onClick={decrementar}>-</button>
            <button onClick={()=>{onAdd(count)}} style={{margin:5}}>Agregar al Carrito</button>
            <button onClick={incrementar}>+</button>
        </div>
    )
}

export default ItemCount