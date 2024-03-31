import ItemDetail from "../ItemDetail/ItemDetail"
import { useEffect,useState } from "react"
/* import { getProductosById } from "../../asynckMock" */
import { useParams } from "react-router-dom"
import { getDoc, doc } from "firebase/firestore"
import { db } from "../../services/firebase/firebaseConfig"
import Loading from "../Loading/Loading"

const ItemDetailContainer = ()=>{
    const [producto, setProducto] =useState(null)
    const {itemId} = useParams()
    const [loading, setLoading] = useState(true);
    useEffect(()=>{

        // Esto venia de AsyncMock
/*         getProductosById(Number(itemId))
        .then(result => setProducto(result)) */
        const productDoc = doc(db, 'products', itemId)

        getDoc(productDoc)
        .then(documentSnapshot => {
            
                const productAdapted = {
                    id: documentSnapshot.id,
                    ...documentSnapshot.data()
                }
                
                setProducto(productAdapted);

                })
                
        .catch(error => console.log("Hubo un problema al traer el producto de Firebase : ", error))
        .finally(()=>{
            setLoading(false)
        })
        
    },[itemId])
    
    //Cargando
    if(loading){
        return(
            <>
                <Loading mensaje="Cargando Productos" />
            </>
        )
    }

    return(
        <main style={{width:"100%", display:"flex", flexDirection:"column", alignItems:"center",backgroundColor:"gray", height:"100vh", paddingTop:5}}>
            <ItemDetail {...producto} />
        </main>
    )
}

export default ItemDetailContainer