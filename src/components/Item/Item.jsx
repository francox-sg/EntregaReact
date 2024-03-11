import classes from './Item.module.css'
import { Link } from 'react-router-dom'

const Item = ({id,nombre, imagen, precio})=>{
    return(
        <article className={classes.card}>
            <h4>{nombre}</h4>
            <div>
                <img src={imagen} alt="Imagen de Producto" />
            </div>
            <p>${precio}</p>
            <Link to={`/item/${id}`} >Detalle</Link>
        </article>
    )
}

export default Item