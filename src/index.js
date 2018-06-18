import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route } from 'react-router-dom'

import reducers from './reducers';
import PostsIndex from './components/posts_index'
import promise from 'redux-promise'

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);



ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
    {/* if I went to that path --> then show that component, this two props are very important */}
      <div>
        <Route path="/" component={PostsIndex}/>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
