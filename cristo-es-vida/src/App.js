
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import routes from './routes/config.js';
import './App.css';

function App() {
  return (
    <div className="App">
     <Router>
        <Switch>
          {routes.map((route, index) => (
            <RouteWithSubRoutes key={index} {...route} />
          ))}
        </Switch>
      </Router>
    </div>
  );
}

function RouteWithSubRoutes(route) {

  return (
    <Route
      path={route.path}
      exact={route.exact}
      render={props => <route.component routes={route.routes}{...props} />}
    />
  );
}


export default App;
