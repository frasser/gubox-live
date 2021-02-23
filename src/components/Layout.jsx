import React from 'react'
import Footer from './Footer'
import Header from './Header'
import Navbar from './Navbar'
import Hero from './Hero'

const Layout = ({children}) => {
    return (
        <div>
            <Navbar/>
            <Hero></Hero>
            {children}
            
            
           
        </div>
    )
}

export default Layout