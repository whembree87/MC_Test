import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import promise from 'redux-promise';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import NavBar from './components/NavBar';
import Summarizer from './containers/Summarizer';
import SummaryList from './containers/SummaryList';
import reducers from './reducers/index';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
      <BrowserRouter>
          <div className="row">
              <div className="col-md-12">
                  <NavBar />
                  <Switch>
                      <Route path="/summarizer" component={Summarizer} />
                      <Route path="/" component={SummaryList} />
                  </Switch>
              </div>
          </div>
      </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
