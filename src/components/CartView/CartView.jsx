import { CartContext } from "../../context/CartContext"
import { useContext } from "react"
import CartProduct from "../CartProduct/CartProduct"
import { Link } from "react-router-dom"
import CartFooter from "../CartFooter/CartFooter"

const CartView = ()=> {
    const {cart, removeItem, clear , total} = useContext(CartContext)

    

    if(cart.length>0){
        return(
            <>
                <h2>CartView</h2>
                    {
                        cart.map((prod)=>{
                            return(
                                <CartProduct key={prod.id} {...prod} onDelete={removeItem} />
                            )
                        })
                    }
                <CartFooter total={total}/* onClear={clear()}  *//>
            </>
        )
    }else{
        return(
            <>
                <h2>¡Aún no hay Productos en el Carrito!</h2>
                <Link to={'/'} >Volver a Productos</Link>
            </>
        )
    }
}

export default CartView