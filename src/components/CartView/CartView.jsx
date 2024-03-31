import { CartContext } from "../../context/CartContext"
import { useContext } from "react"
import CartProduct from "../CartProduct/CartProduct"
import { Link } from "react-router-dom"
import CartFooter from "../CartFooter/CartFooter"

const CartView = ()=> {
    const {cart, removeItem, clear , total} = useContext(CartContext)

    

    if(cart.length>0){
        return(
            <main style={{backgroundColor:"gray", minHeight:"100vh"}}>
                <h2>CartView</h2>
                    {
                        cart.map((prod)=>{
                            return(
                                <CartProduct key={prod.id} {...prod} onDelete={removeItem} />
                            )
                        })
                    }
                <CartFooter total={total} onClear={clear} />
            </main>
        )
    }else{
        return(
            <main style={{backgroundColor:"gray", minHeight:"100vh"}}>
                <h2 style={{paddingTop:"40vh"}}>¡Aún no hay Productos en el Carrito!</h2>
                <Link to={'/'} style={{color:"blue"}} >Volver a Productos</Link>
            </main>
        )
    }
}

export default CartView