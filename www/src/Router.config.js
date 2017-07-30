import React from 'react';
import {Router,Route,hashHistory,IndexRoute,Redirect} from 'react-router';
import App from './components/App';
import Home from './components/home';
import Cart from "./components/cart";
import Contact from "./components/contact";
import Product from "./components/products";
import Detail from "./components/detail";
import Error from "./components/error";
import Register from './components/register';
import Forget from './components/forget';


const RouterConfig=()=>(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path='home' component={Home}/>
      <Route path="register" component={Register}/>
      <Route path="forget" component={Forget}/>
      <Route path='product' component={Product}>
      </Route>
      <Route path='contact' component={Contact}/>
      <Route path='cart' component={Cart}/>
      <Route path='detail' component={Detail}>
        <Route path=":aid" component={Detail}/>
      </Route>
      <Route path="*" component={Error}/>
    </Route>
  </Router>
)

export default RouterConfig;