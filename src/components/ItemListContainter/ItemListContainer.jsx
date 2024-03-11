import { getProductos,getProductosByCategory } from "../../asynckMock"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";

const ItemListContainer =(props)=>{

    const [productos, setProductos] = useState([]);

    const {categoryId}= useParams()

    useEffect(()=>{

        const asyncFunction = categoryId ?  getProductosByCategory :getProductos
        asyncFunction(categoryId)
        .then(response =>{
            setProductos(response);

        })
    }
    ,[categoryId])

    return (
        <main>
            <h1 style={{fontSize:30 , marginTop:50}} >{props.greeting}</h1>
            <div style={{display:"flex", flexWrap:"wrap",justifyContent:"center", gap:10}}>
                <ItemList productos={productos}/>
            </div>
        </main>
    )
}

export default ItemListContainer