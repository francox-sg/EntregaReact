import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";
import Loading from "../Loading/Loading";

const ItemListContainer =(props)=>{

    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);

    const {categoryId}= useParams()

    useEffect(()=>{

        //Referencia a la collection de la base de datos db
        const productsCollection =  categoryId                  //Verifico si hay categoria, sino traigo todo
                                    ? query( collection(db, 'products') , where('categoria', '==', categoryId) )
                                    : collection(db, 'products')

        getDocs(productsCollection)
        .then(querySnapshot => {
            const productsAdapted = querySnapshot.docs.map(doc =>{
                const data = doc.data();

                return {
                    id: doc.id,
                    ...data
                }
            })

            setProductos(productsAdapted)
        })
        .catch(error => console.error("Hubo un problema al traer productos de Firebase :", error))
        .finally(
            setLoading(false)
        )
    }
    ,[categoryId])

    //Cargando
    if(loading){
        return(
            <>
                <Loading/>
            </>
        )
    }

    return (
        <main style={{backgroundColor:"gray", margin:0, height:"100vh"}}>
            <h1 style={{fontSize:30 , padding:10}} >{props.greeting}</h1>
            <div style={{display:"flex", flexWrap:"wrap",justifyContent:"center", gap:10}}>
                <ItemList productos={productos}/>
            </div>
        </main>
    )
}

export default ItemListContainer