//layouts
import LayoutsBasic from "../layouts/LayoutsBasic.js";
//pages
import Home from "../pages/Home.js";

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
            component: Error404
        }
    ]

},
]