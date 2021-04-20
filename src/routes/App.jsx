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
import NonAuthLayout from '../components/NonAuthLayout'
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
           
           
                <Switch>            
                    <RouteWrapper exact path="/" component={Home} layout={Layout}/>
                    <RouteWrapper exact path="/login" component={Login}  layout={NonAuthLayout}/>
                    <RouteWrapper exact path="/register" component={Register} layout={NonAuthLayout}/>
                    
                    <RouteWrapper exact path="/charts" component={Charts} layout={Layout}/>
                    <RouteWrapper exact path="/users" component={Users} layout={Layout}/>
                    <RouteWrapper exact path="/newUsers" component={UsersNew} layout={Layout}/>
                    <RouteWrapper exact path="/devices" component={Devices} layout={Layout}/>
                    <RouteWrapper exact path="/newDevices" component={DevicesNew} layout={Layout}/>
                    <RouteWrapper exact path="/routes" component={Rutes} layout={Layout}/>
                    <RouteWrapper component={NotFound} layout={NonAuthLayout} />
                    
                </Switch>
            
           
           </BrowserRouter> 
           </AppContext.Provider>
        </>
    )
}

function RouteWrapper({
    component: Component, 
    layout: Layout, 
    ...rest
  }) {
    return (
      <Route {...rest} render={(props) =>
        <Layout {...props}>
          <Component {...props} />
        </Layout>
      } />
    );
  }

export default App
