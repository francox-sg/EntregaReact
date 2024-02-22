import imgCarrito56px from './assets/imgCarrito56px.png'
import classes from './CartWidget.module.css'

const CartWidget = ()=>{

    return(
        <a className='d-flex align-items-center gap-1'>
            <div>
                <img className={classes.imgCart} src= {imgCarrito56px} />
            </div>
            <p className={classes.counterCart}>0</p>
        </a>
        
    )
}


export default CartWidget