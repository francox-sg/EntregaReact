import classes from'./ChecksumForm.module.css'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'

const CheckoutForm = ({generarOrden})=>{

    const {register, formState:{errors}, handleSubmit, reset, watch} = useForm({
        defaultValues:{
            nombre:"",
            apellido:"",
            email:"",
            email_2:""
        }
    });

    const envioFormulario = (data) =>{
        console.log(data);
        //validacion de Emails
        if(data.email != data.email_2){
            console.log("Los mails no coinciden");
        }else{
            generarOrden(data)
            reset();
        }
    }

    return(
        <>
            <form action="" onSubmit={handleSubmit(envioFormulario)}>
                <fieldset className={classes.form}>
                <legend>Datos del Comprador</legend>
                    <div>
                        <label>Nombre </label>
                        <input  type="text" placeholder='Nombre' {...register("nombre", {required:true, minLength:2})}/>
                        {
                            errors.nombre?.type === "required" && (
                                <p className={classes.errorInput}>Ingrese Nombre</p>
                            )
                        }
                    </div>
                    <div>
                        <label> Apellido </label>
                        <input type="text" placeholder='Apellido' {...register("apellido", {required:true, minLength:2})}/>
                        {
                            errors.nombre?.type === "required" && (
                                <p className={classes.errorInput}>Ingrese Apellido</p>
                            )
                        }
                    </div>
                    <div>
                        <label> Correo </label>
                        <input type="email" placeholder='pandora@pandora.com' {...register("email", {required:true, minLength:2})}/>
                        {
                            errors.nombre?.type === "required" && (
                                <p className={classes.errorInput}>Ingrese Correo</p>
                            )
                        }
                    </div>
                    <div>
                        <label>Ingrese el correo nuevamente </label>
                        <input type="email" placeholder='pandora@pandora.com' {...register("email_2", {required:true, minLength:2})}/>
                        {
                            errors.nombre?.type === "required" && (
                                <p className={classes.errorInput}>Ingrese Correo Nuevamente</p>
                            )
                        }
                    </div>
                    <input className='btn btn-success' type="submit" value={"Finalizar Compra"} />  

                </fieldset>
            </form>

            <Link to={'/cart'}>Volver</Link>
        </>
    )







    /* const formulario ={
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
                    <input onClick={(e)=> e.preventDefault()} type="submit" value={"Finalizar Compra"} />  

                </fieldset>
            </form>

            <Link to={'/cart'}>Volver</Link>
        </>
    ) */
}
export default CheckoutForm