import classes from './Item.module.css'


const Item = ({nombre, imagen, precio})=>{
    return(
        <div className={classes.card}>
            <h4>{nombre}</h4>
            <div>
                <img src={imagen} alt="Imagen de Producto" />
            </div>
            <p>${precio}</p>
            <button>Detalle</button>
        </div>
    )
}

export default Item