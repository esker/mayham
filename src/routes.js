import React  from 'react';
import {Route, IndexRoute} from 'react-router';
import Home from './components/common/HomePage';
import About from './components/common/About';
import Games from './components/common/Games';
import Blog from './components/common/Blog';
import App from './components/App';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home}></IndexRoute>
    <Route path="/about" component={About}></Route>
    <Route path="/games" component={Games}></Route>
    <Route path="/blog" component={Blog}></Route>
  </Route>
);