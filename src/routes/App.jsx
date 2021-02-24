import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Home from '../containers/Home'
import Login from '../containers/Login'
import Register from '../containers/Register'
import NotFound from '../containers/NotFound'
import Charts from '../containers/Charts'
import Users from '../containers/Users'
import UsersNew from '../containers/UsersNew'
import Devices from '../containers/Devices'
import DevicesNew from '../containers/DevicesNew'
import Rutes from '../containers/Rutes'

import Layout from '../components/Layout'
import '../styles/global.css'

/** las siguientes importaciones perteneces al contexto que se va a compartir en toda la app mediante el Provider y elcustom hook */
import AppContext from '../context/AppContext'
import useInitialState from '../hooks/useInitialState'
/**------------------------------------------------------------------- */

function App() {
    const initialState = useInitialState()
    return (
        <>
        <AppContext.Provider value={initialState}>
           <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/login" component={Login}/>
                    <Route exact path="/register" component={Register}/>
                    <Route exact path="/charts" component={Charts}/>
                    <Route exact path="/users" component={Users}/>
                    <Route exact path="/devices" component={Devices}/>
                    <Route exact path="/routes" component={Rutes}/>
                    <Route component={NotFound} />
                </Switch>
            </Layout>
           </BrowserRouter> 
           </AppContext.Provider>
        </>
    )
}

export default App
