import React from 'react'
import '../styles/containers/Login.css'


const Login =() =>{
    return (
        
            <div className="login-container">
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
                <div className="email-login"></div>
                <div className="footer-login"></div>
                <div className="banner-login"></div>
            </div>
            
        
    )
}

export default Login
