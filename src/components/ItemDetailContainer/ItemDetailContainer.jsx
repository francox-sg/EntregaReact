import ItemDetail from "../ItemDetail/ItemDetail"
import { useEffect,useState } from "react"
import { getProductosById } from "../../asynckMock"
import { useParams } from "react-router-dom"

const ItemDetailContainer = ()=>{
    const [producto, setProducto] =useState(null)
    const {itemId} = useParams()

    useEffect(()=>{
        getProductosById(Number(itemId))
        .then(result => setProducto(result))
    },[itemId])
    

    return(
        <main style={{width:"100%", display:"flex", flexDirection:"column", alignItems:"center",backgroundColor:"gray", height:"100vh", paddingTop:5}}>
            <ItemDetail {...producto} />
        </main>
    )
}

export default ItemDetailContainer