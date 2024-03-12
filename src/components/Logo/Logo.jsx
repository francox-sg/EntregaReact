import logoPandora from './assets/img/logoPandora.png'
import classes from './Logo.module.css'
import { Link } from 'react-router-dom'

const Logo = () =>{

    return(
        <a className='d-flex flex-column justify-content-center align-items-center'>
            <Link to={'/'}>
                <img className={classes.imgLogo}  src={logoPandora} />
            </Link>
            <p className={classes.nameLogo}>pandora</p>
        </a>
    )
}

export default Logo