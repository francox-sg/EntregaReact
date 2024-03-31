import { Link } from 'react-router-dom'
import imgCarrito56px from './assets/imgCarrito56px.png'
import classes from './CartWidget.module.css'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'


const CartWidget = ()=>{
    const {totalQuantity} = useContext(CartContext)


    return(
        <Link to={'/cart'} className='d-flex align-items-center gap-1'>
            <div>
                <img className={classes.imgCart} src= {imgCarrito56px} />
            </div>
            <p className={classes.counterCart}>{totalQuantity}</p>
        </Link>
        
    )
}


export default CartWidget