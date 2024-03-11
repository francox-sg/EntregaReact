import { Link } from "react-router-dom"

const BotonNavbar = (props)=>{


    const link = props.texto==="Todos" ? `/` :`/categorias/${props.texto}`
    return(

        <Link to={link} style={{height:30, paddingTop:0, paddingBottom:0}} className="btn btn-primary">{props.texto}</Link>
    )
}

export default BotonNavbar