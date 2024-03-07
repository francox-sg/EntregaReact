import { getProductos } from "../../asynckMock"
import { useState, useEffect } from "react"
import ItemList from "../ItemList/ItemList";

const ItemListContainer =(props)=>{

    const [productos, setProductos] = useState([]);

    useEffect(()=>{
        getProductos()
        .then(response =>{
            setProductos(response);
        })
    }
    ,[])

    return (
        <>
            <h1 style={{fontSize:30 , marginTop:50}} >{props.greeting}</h1>
            <div style={{display:"flex", flexWrap:"wrap",justifyContent:"center", gap:10}}>
                <ItemList productos={productos}/>
            </div>
        </>
    )
}

export default ItemListContainer