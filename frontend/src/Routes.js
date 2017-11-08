import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';

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
