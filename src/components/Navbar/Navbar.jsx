import BotonNavbar from "../BotonNavbar/BotonNavbar"
import CartWidget from "../CartWidget/CartWidget"
import Logo from "../Logo/Logo"



const Navbar = () =>{



    return (
        <header>
            <Logo/>        
            <nav>
                <BotonNavbar texto="Inicio" />
                <BotonNavbar texto="Productos" />
                <BotonNavbar texto="Ofertas" />
            </nav>
            <CartWidget/>
        </header>
    )
}

export default Navbar