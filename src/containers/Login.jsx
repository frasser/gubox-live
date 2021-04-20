import React from 'react'
import {Link} from 'react-router-dom'

import LiveLogo from '../assets/statics/gubox-live.svg'
import BigLiveLogo from '../assets/statics/big-gubox-live.svg'
import GridImg from '../assets/statics/img_grid-top.svg'
import '../styles/containers/Login.css'


const Login =() =>{
    return (
        
            <div className="login-container">
                <div className="contenedor-form">
                    <div className="social-login">
                        <div className="social-facebook">
                            <a href="" className="btn-fcbk btn--big btn--responsive">
                                <span className="icon--line icon-fcbk"></span>
                                <span>Inicia sesión con Facebook</span>
                            </a>
                        </div>
                        <div className="social-twitter">
                            <a href="" className="btn-twt btn--big btn--responsive">
                                <span className="icon--line icon-fcbk"></span>
                                <span>Inicia sesión con Twitter</span>
                            </a>
                        </div>
                    </div>
                    <div className="LoginDivider">
                        <span className="LoginDivider-text">
                            
                            <span>o</span>
                            
                        </span>
                    </div>
                    <div className="email-login">
                        <form method="post">
                            <div className="FormInput">
                                <input type="email" name="email" required="" autoComplete="off" placeholder="Tu email" className="FormInput-field"/>
                                <label className="FormInput-label"><span>Tu email</span></label>
                                <p className="FormInput-error"> </p>
                            </div>
                            <div className="FormInput">
                                <input type="password" name="password" required="" autoComplete="off" placeholder="Tu contraseña" className="FormInput-field"/>
                                <label className="FormInput-label"><span>Tu contraseña</span></label>
                                <p className="FormInput-error"> </p>
                            </div>
                            <button className="btn-login"><span>Inicia sesión</span></button>
                            <div className="LoginWithEmail-lostpassword"><a href="/password/reset/"><span >¿Olvidaste tu contraseña?</span></a></div>
                        </form>
                    </div>
                    <div className="footer-login">
                        <div className="AccountFooter-create"><span>¿Aún no tienes cuenta en Gubox Live?</span></div>
                        <Link to="/register"><div className="AccountFooter-link"><a className="AccountFooter-btn">
                            <span>Regístrate</span></a></div></Link>
                    </div>
                </div>
                <div className="banner-login">
                    <div className="banner-Logo">
                        <img
                            src={BigLiveLogo}
                            alt="Gubox live Logo"                   
                        />
                    </div>
                    <div className="banner-Info ">
                        <p className=" ">Gubox live is the platform built for enchance user experiences using the devices offering by gubox. </p>
                        <br></br>
                        <p>This app offers deep immersion in the management and visualization of the data, events, and explorations of your tracking devices.</p>
                    </div>
                        <div className="grid_back-footer">
                        <img 
                            src={GridImg}
                            alt="Gubox live Logo"                   
                        />
                        </div>


                </div>
            </div>
            
        
    )
}

export default Login
