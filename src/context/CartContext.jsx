import { createContext, useState } from 'react'
import Swal from 'sweetalert2'

export const CartContext = createContext(null)





const CartProvider = ({children}) =>{

    const [cart, setCart] = useState([])


    //Funcion AddItem, verifica si existe el producto y si asi es verifica que haya stock disponible
    const addItem = (item)=>{

        const isInCart = cart.some(prod => prod.id === item.id);

        if(!isInCart){
            setCart(prev=> [...prev,item])

            Swal.fire({
                icon:'success',
                text: `¡Agregaste ${item.nombre} al carrito!`,
                confirmButtonText: 'OK'
                })

        } else{
            
            const newCart = cart.map(prod =>{
                if(prod.id === item.id){

                    const superaStock = item.stock < ( prod.quantity + item.quantity)

                    if(superaStock){
                        Swal.fire({
                            icon:'error',
                            text: `Stock Disponible excedido`,
                            confirmButtonText: 'OK'
                            })
                        }else{
                            prod.quantity = prod.quantity + item.quantity;
                            Swal.fire({
                                icon:'success',
                                text: `¡Agregaste ${item.nombre} al carrito!`,
                                confirmButtonText: 'OK'
                                })
                        }  
                }
                return prod;
            })

            setCart(newCart);
        }
    }
    
    //Funcion borrar del carrito, probada y funcionando
    const removeItem = (item)=>{
        const newCart = cart.filter(prod => prod.id != item.id)
        
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



    return (
        <CartContext.Provider value ={{cart, addItem, removeItem, clear, totalQuantity, total}}>
            {children}
        </CartContext.Provider>

    )
}
export default CartProvider