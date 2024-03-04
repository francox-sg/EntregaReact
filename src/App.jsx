import './App.css'
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainter/ItemListContainer'
import After from './components/After/After'
function App() {
  

  return (
    <>
      <Navbar />
      <ItemListContainer greeting="¡Bienvenidos a Pandora!"/>
    </>
  )
}

export default App
