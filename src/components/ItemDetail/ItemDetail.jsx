import ItemCount from '../ItemCount/ItemCount'
import classes from './ItemDetail.module.css'
import { Link } from 'react-router-dom'

const ItemDetail =({nombre, imagen, precio, stock, descripcion, categoria}) =>{

    return(
        <>  
            <Link to={`/`} className={classes.volver}>{"Volver"}</Link>
            <article>
                <div className= {classes.contenedor} >
                    <div className= {classes.imgContainer}>
                        <img className= {classes.img} src={imagen} alt="Imagen de Producto" />
                    </div>
                    <div>
                        <h4>{nombre}</h4>
                        <h5>{categoria}</h5>
                        <p>${precio}</p>
                        <p>Stock: {stock}</p>
                        <p className= {classes.descripcion}> Descripcion: {descripcion}`</p>
                    </div>
                </div>
                <ItemCount stock={stock} />
            </article>
            <div>
            </div>
            
        </>
    )
}

export default ItemDetail