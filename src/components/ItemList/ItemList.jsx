import Item from "../Item/Item";


const ItemList = ({productos})=>{

    
    return(
        <>
            {
            productos.map((producto)=>{
                
                return(
                        <Item key={producto.id} {...producto} />
                )
            })
            }
        </>
    )
}

export default ItemList