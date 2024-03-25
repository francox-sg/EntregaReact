import './App.css'
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainter/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { createContext, useState } from 'react'

export const CartContext = createContext(null)

function App() {
  const [cart, setCart] = useState([])
  
  console.log("Este es el carrito actual: " , cart);

  return (
    <>
      <CartContext.Provider value ={{cart, setCart}}>
        <BrowserRouter>
          <Navbar />
            <Routes>
              <Route path='/' element ={ <ItemListContainer greeting="¡Bienvenidos a Pandora!"/>} />
              <Route path='/item/:itemId' element ={ <ItemDetailContainer/>} />
              <Route path='/categorias/:categoryId' element ={ <ItemListContainer greeting="Sección Categorias"/>} />
            </Routes>
        </BrowserRouter>
      </CartContext.Provider>
      
    </>
  )
}

export default App
