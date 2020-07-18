import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './component/Home';
import About from './component/About';
import Product from './component/Product';
import ProductNav from './component/ProductNav';
import Navbar from './component/Navbar';
const GlobalRoutes = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route exact path="/product" component={Product} />
                <Route path="/product/:id" component={ProductNav} />
            </Switch>
        </BrowserRouter>
    )
}
export default GlobalRoutes;