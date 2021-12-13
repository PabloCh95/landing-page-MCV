import React from 'react'
import {Route,Switch} from 'react-router-dom'

//componentes
import MenuTop from '../components/MenuTop/MenuTop';

//css
import './LayoutsBasic.css'

export default function LayoutsBasic({routes}) {
    return (
        <div className="main-banner">
                <MenuTop/>
                <LoadRoutes routes={routes}  />
                
        </div>
    )
}

function LoadRoutes({routes}){
    return (
    <Switch>
        {routes.map((route,index)=>(
        <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={route.component}
        />
        ))}
    </Switch>
  );
}