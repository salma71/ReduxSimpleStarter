import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
// the switch component will look at all the routes inside of it. then 
// it will decide to only render the first route that matches the
// current routes that you are in 
// so you have to place the most specific route at the top of the list 

import reducers from './reducers';
import PostsIndex from './components/posts_index'
import promise from 'redux-promise'
import PostsNew from './components/posts_new'

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);



ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
    {/* if I went to that path --> then show that component, this two props are very important */}
      <div>
        <Switch>
          <Route path="/posts/new" component={PostsNew} />
          <Route path="/" component={PostsIndex}/>
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
