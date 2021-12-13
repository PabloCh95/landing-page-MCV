//layouts
import LayoutsBasic from "../layouts/LayoutsBasic.js";
//pages
import Home from "../pages/Home.js";
import Canciones from "../pages/Canciones.js";
import Contacto from "../pages/Contacto.js";

//other , error
import Error404 from '../pages/Error404.js';

const routes = [{
    path: '/',
    component: LayoutsBasic,
    exact: false,
    routes: [
        {
            path: '/',
            component: Home,
            exact: true
        },
        {
            path: '/canciones',
            component: Canciones,
            exact: true
        },
        {
            path: '/contacto',
            component:Contacto,
            exact: true
        },
        {
            component: Error404
        }
    ]

},
]

export default routes;