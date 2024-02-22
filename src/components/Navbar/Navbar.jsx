import BotonNavbar from "../BotonNavbar/BotonNavbar"
import CartWidget from "../CartWidget/CartWidget"
import Logo from "../Logo/Logo"



const Navbar = () =>{



    return (
        <header className="bg-dark container-fluid d-flex justify-content-between">
            <Logo/>        
            <nav className="d-flex align-items-center gap-2">
                <BotonNavbar texto="Inicio" />
                <BotonNavbar texto="Productos" />
                <BotonNavbar texto="Ofertas" />
            </nav>
            <CartWidget/>
        </header>
    )
}

export default Navbar