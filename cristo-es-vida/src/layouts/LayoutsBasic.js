import React from 'react'
import {Route,Switch} from 'react-router-dom'

//componentes
import MenuTop from '../components/MenuTop/MenuTop';

export default function LayoutsBasic({routes}) {
    return (
        <div>
                <MenuTop/>
                <LoadRoutes routes={routes}  />
        </div>
    )
}

function LoadRoutes({routes}){
    return (
    <Switch>
        {  routes.map((route,index)=>(
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