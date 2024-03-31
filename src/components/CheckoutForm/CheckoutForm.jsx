import classes from'./ChecksumForm.module.css'
import { Link } from 'react-router-dom'


const CheckoutForm = ({generarOrden})=>{

    
    const formulario ={
        nombre:"",
        apellido:"",
        email:"",
        email_2:"",
        fecha:""
    }

    return(
        <>
            <form action="">
                <fieldset className={classes.form}>
                <legend>Datos del Comprador</legend>
                    <div>
                        <label htmlFor="">Nombre </label>
                        <input onInput={(e)=>{formulario.nombre = e.target.value }} id='nombre' type="text" placeholder='Nombre' required/>
                    </div>
                    <div>
                        <label htmlFor="" >Apellido </label>
                        <input onInput={(e)=>{formulario.apellido = e.target.value }} type="text" placeholder='Apellido'required/>
                    </div>
                    <div>
                        <label htmlFor="" >Correo </label>
                        <input onInput={(e)=>{formulario.email = e.target.value }} type="email" placeholder='pandora@pandora.com' required/>
                    </div>
                    <div>
                        <label htmlFor="">Ingrese el correo nuevamente </label>
                        <input onInput={(e)=>{formulario.email_2 = e.target.value }} type="email" placeholder='pandora@pandora.com' required/>
                    </div>
                    <input onClick={(e)=> {e.preventDefault(); generarOrden(formulario)}} type="submit" value={"Finalizar Compra"} />  

                </fieldset>
            </form>

            <Link to={'/cart'}>Volver</Link>
        </>
    )
}
export default CheckoutForm