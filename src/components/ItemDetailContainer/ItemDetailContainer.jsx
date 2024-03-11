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
        <main>
            <ItemDetail {...producto} />
        </main>
    )
}

export default ItemDetailContainer