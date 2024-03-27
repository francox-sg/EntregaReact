import { createContext, useState } from 'react'

export const CartContext = createContext(null)





const CartProvider = ({children}) =>{

    const [cart, setCart] = useState([])


    //Funcion AddItem, verifica si existe el producto y si asi es verifica que haya stock disponible
    const addItem = (item)=>{

        const isInCart = cart.some(prod => prod.id === item.id);

        if(!isInCart){
            setCart(prev=> [...prev,item])
        } else{
            
            const newCart = cart.map(prod =>{
                if(prod.id === item.id){

                    const superaStock = item.stock < ( prod.quantity + item.quantity)

                    if(superaStock){
                        console.error("Se supera el Stock")
                        }else{
                            prod.quantity = prod.quantity + item.quantity;
                            
                        }  
                }
                return prod;
            })

            setCart(newCart);
        }
    }
    
    //Funcion borrar del carrito, probada y funcionando
    const removeItem = (item)=>{
        console.log("Este es el Item ID a borrar: ",item.id);
        const newCart = cart.filter(prod => prod.id != item.id)
        console.log("este es newCarttRemovido",newCart);
        setCart(newCart);
    }

    //Funcion Borrar todo el carrito
    const clear = ()=>{
        setCart([]);
    }


    //Funcion Contadora de items totales
    const getTotalQuantity = () =>{
        let acumulador =0;
        cart.forEach((prod)=>{
            acumulador = acumulador + prod.quantity;
        })
        return acumulador;
    }

    //Funcion que calcula el $ Total del Carrito
    const total =()=>{
        let total =0;
        cart.forEach((prod)=>{
            total = total + prod.quantity * prod.precio;
        })
        return total;
    }

    const totalQuantity = getTotalQuantity();

    console.log("Este es el carrito actual: " , cart);

    return (
        <CartContext.Provider value ={{cart, addItem, removeItem, clear, totalQuantity}}>
            {children}
        </CartContext.Provider>

    )
}
export default CartProvider