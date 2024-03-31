import CheckoutForm from "../CheckoutForm/CheckoutForm"
import { addDoc, collection, query, where, documentId, getDocs, writeBatch, Timestamp  } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";
import { useState } from "react";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import Loading from "../Loading/Loading";


const Checkout = ()=>{
    const [compraRealizada, setCompraRealizada] = useState(false)
    const [loading, setLoading] = useState(false);

    const {clear, cart, total} = useContext(CartContext);


    const handlerGenerarOrden = async (formulario) =>{
        
            
            if(cart.length === 0){
                console.log("El carrito esta vacio")
                return
            }

            console.log("Inicio de generacion de Orden");
            const orden = {
                comprador: formulario,
                items: cart,
                fecha:"",
                total:total()
            }

            setLoading(true);

            console.log(orden);
            const batch = writeBatch(db)
            const sinStock=[]
            const ids = cart.map(prod => prod.id)
    
            const productCollection = query(collection(db,'products'), where(documentId(), "in", ids ))
    
            const querySnapshot = await getDocs(productCollection)
            const {docs} = querySnapshot
    
            docs.forEach((doc)=>{
                const data =doc.data()
                const stockDb= data.stock
    
                const productoEnCarrito = cart.find(prod => prod.id ==doc.id)
                const prodQuantity = productoEnCarrito.quantity
    
                if (stockDb >= prodQuantity){
                    batch.update(doc.ref, {stock: stockDb - prodQuantity}) //guardo la actualizacion del stock
                }else{
                    sinStock.push({id:doc.id, ...data})
                }
            })
    
            if(sinStock.length ===0){
                
                //Actualizo Stocks de Productos
                batch.commit()
                
                // Cargo nueva Orden
                orden.fecha = Timestamp.fromDate(new Date());
            
                const orderCollection = collection(db, "orders")
                await addDoc(orderCollection, orden)
                .then(doc=>{ 
                    console.log(doc.id);
                    setCompraRealizada(doc.id)
                    clear();
                    
                })
                
                .catch(error=>console.error("Hubo un error al enviar la orden a Firebase : ", error))
                
            }else{
                console.error("Hay Productos sin Stock : ", sinStock);
            }

            setLoading(false);
    }

    if(loading){
        return(
            <main >
                <Loading mensaje="Cargando Orden... " />
            </main>
        )
    }

    return(
        <main style={{backgroundColor:"lightgrey", minHeight:"100vh"}}>
            <h2>Checkout</h2>
            {
                compraRealizada
                ? <h3>El codigo de la compra es: {compraRealizada}</h3>
                : <CheckoutForm generarOrden={handlerGenerarOrden} />
            }
        </main>
    )
}


export default Checkout
