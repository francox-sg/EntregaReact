import ItemCount from '../ItemCount/ItemCount'
import classes from './ItemDetail.module.css'
import { Link } from 'react-router-dom'
import { useState, useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const ItemDetail =({id, nombre, imagen, precio, stock, descripcion, categoria}) =>{
    const [verCount, setVerCount] = useState(true);
    const {addItem} =useContext(CartContext);

    //Funcion manejadora de Agrrgado a Carrito
    const handleOnAdd = (count) =>{
        
        const productoOnAdd ={id:id, quantity:count, nombre:nombre, imagen:imagen, precio:precio, stock:stock, descripcion:descripcion, categoria:categoria};
        
        addItem(productoOnAdd);   //Agrego a Carrito
        
        setVerCount(false);
    }


    return(
        <>  
            <Link to={`/`} className={classes.volver}>{"Volver"}</Link>
            <article className={classes.articulo}>
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
                {
                    verCount 
                    ?(stock>0 ? <ItemCount stock={stock} onAdd={handleOnAdd} /> : <p>No hay Stock Disponible</p> )
                    :<Link className={classes.finalizar} to={'/Cart'}  >Finalizar Compra</Link>
                }
            </article>
            <div>
            </div>
            
        </>
    )
}

export default ItemDetail