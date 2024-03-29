import './App.css'
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainter/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CartProvider from './context/CartContext'
import CartView from './components/CartView/CartView'
import Checkout from './components/Checkout/Checkout'


function App() {

  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <Navbar />
            <Routes>
              <Route path='/' element ={ <ItemListContainer greeting="¡Bienvenidos a Pandora!"/>} />
              <Route path='/item/:itemId' element ={ <ItemDetailContainer/>} />
              <Route path='/categorias/:categoryId' element ={ <ItemListContainer greeting="Sección Categorias"/>} />
              <Route path='/cart' element ={ <CartView/>} />
              <Route path='/checkout' element ={ <Checkout/>} />
            </Routes>
        </BrowserRouter>
      </CartProvider>
    </>
  )
}

export default App
