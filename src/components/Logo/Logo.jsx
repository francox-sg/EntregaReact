import logoPandora from './assets/img/logoPandora.png'
import classes from './Logo.module.css'

const Logo = () =>{

    return(
        <a className='d-flex flex-column justify-content-center align-items-center'>
            <div>
                <img className={classes.imgLogo}  src={logoPandora} />
            </div>
            <p className={classes.nameLogo}>pandora</p>
        </a>
    )
}

export default Logo