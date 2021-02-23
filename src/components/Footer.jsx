import React from 'react'
import "../styles/components/Footer.css"

function Footer() {
    return (
        <footer className="footer">
            <section className="ft-legal">
                <ul className="ft-legal-list">
                    <li><a href="#">Terminos de uso</a></li>
                    <li><a href="#">Declaracion de privacidad</a></li>
                    <li><a href="#">Centro de ayuda</a></li>
                    <li>2021 Copyright  ®Gubox. </li>
 
                    
                </ul>
            </section>
        </footer>
    )
}

export default Footer
//mode: process.env.WEBPACK_SERVE ? 'development' : 'production'