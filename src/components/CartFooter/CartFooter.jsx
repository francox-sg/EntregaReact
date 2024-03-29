import { Link } from "react-router-dom"

const CartFooter = ({total,onClear})=>{

    return(
        <>
            <div>
                <p>Total: {total()}</p>
                <Link to={'/checkout'} className="btn btn-success">Checkout</Link>
            </div>
            <button onClick={()=>{onClear()}} className="btn btn-danger">Eliminar Carrito</button>
        
        </>
    )
}


export default CartFooter