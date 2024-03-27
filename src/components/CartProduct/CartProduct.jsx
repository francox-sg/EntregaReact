
import classes from './CartProduct.module.css'
const CartProduct = ({id, nombre, quantity, precio, imagen, onDelete}) =>{


    return(
        <article className={classes.articulo} >
            <div><img src={imagen} /></div>
            <h3 className={classes.articulo}>{nombre}</h3>
            <p className={classes.articulo}> x{quantity}</p>
            <h4 className={classes.articulo}>$ {precio*quantity}</h4>
            <button onClick={()=>{onDelete({id:id})}} className='btn btn-danger' >eliminar</button>
        </article>
    )
}


export default CartProduct