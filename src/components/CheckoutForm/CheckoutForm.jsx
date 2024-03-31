import classes from'./ChecksumForm.module.css'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import Swal from 'sweetalert2'

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

        //validacion de Emails
        if(data.email != data.email_2){
            
            Swal.fire({
                icon:'warning',
                text: `¡Los correos no coinciden!`,
                confirmButtonText: 'OK'
                })
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
                    <input className='btn btn-success mt-3' type="submit" value={"Finalizar Compra"} />  

                </fieldset>
            </form>

            <Link to={'/cart'}>Volver</Link>
        </>
    )

}
export default CheckoutForm