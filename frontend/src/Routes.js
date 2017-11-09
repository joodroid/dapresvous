import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import App from './components/App';

// import Layout 
import Login from './components/Login';
import AddPage from './components/add/AddPage';
import CartPage from './components/cart/CartPage';
import BookPage from './components/book/BookPage';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={Login}/>
    <Route path="add" component={AddPage}/>
    <Route path="cart" component={CartPage}/>
    <Route path="book" component={BookPage}/>
  </Route>
);
