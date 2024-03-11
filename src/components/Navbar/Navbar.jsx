import BotonNavbar from "../BotonNavbar/BotonNavbar"
import CartWidget from "../CartWidget/CartWidget"
import Logo from "../Logo/Logo"



const Navbar = () =>{



    return (
        <header className="bg-dark container-fluid d-flex justify-content-between">
            <Logo/>        
            <nav className="d-flex align-items-center gap-2">
                <BotonNavbar texto="Todos" />
                <BotonNavbar texto="Deportes" />
                <BotonNavbar texto="Tecnologia" />
                <BotonNavbar texto="Libreria" />
            </nav>
            <CartWidget/>
        </header>
    )
}

export default Navbar