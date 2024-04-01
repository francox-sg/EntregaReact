import classes from './CheckoutProducts.module.css'
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"


const CheckoutProducts = () => {

    const {cart, total} = useContext(CartContext);

    if(cart.length >0){
        return(
            <>
                <div className={classes.contenedor}>
                    <h5 className={classes.titular}>Datos del Carrito</h5>
                    {
                        cart.map((prod)=>{
                            return(
                                <article key={prod.id} className={classes.articulo} >
                                    <div><img src={prod.imagen} /></div>
                                    <h3 className={classes.base}>{prod.nombre}</h3>
                                    <p className={classes.base}> x{prod.quantity}</p>
                                    <h4 className={classes.base}>$ {prod.precio*prod.quantity}</h4>
                                </article>
                            )
                        })

                    }
                    <p>Total: {total()}</p>
                </div>
            </>
        )
    }else{
        return(
            <p>No Hay productos en el Carrito</p>
        )
    }

            
    

}

export default CheckoutProducts