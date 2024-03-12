import ItemCount from '../ItemCount/ItemCount'
import classes from './ItemDetail.module.css'
import { Link } from 'react-router-dom'

const ItemDetail =({nombre, imagen, precio, stock, descripcion, categoria}) =>{

    return(
        <>  
            <Link to={`/`} className={classes.volver}>{"Volver"}</Link>
            <article style={{width:"100%", display:"flex",flexDirection:"column", alignItems:"center"}}>
                <div className= {classes.contenedor} >
                    <div className= {classes.imgContainer}>
                        <img className= {classes.img} src={imagen} alt="Imagen de Producto" />
                    </div>
                    <div className= {classes.descriptionContainer}>
                        <h4>{nombre}</h4>
                        <h5 style={{fontSize:16}}>Categoria: {categoria}</h5>
                        <p style={{margin:0}}> Precio: ${precio}</p>
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