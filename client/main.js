import { Meteor } from 'meteor/meteor';
import React from 'react';
import { Provider } from 'react-redux'
import { Router } from 'react-router';
import { render } from 'react-dom';
import { renderRoutes } from '../imports/startup/client/routes.js';
import store from '../imports/store';
import createBrowserHistory from 'history/createBrowserHistory';

const browserHistory = createBrowserHistory();

Meteor.startup(() => {
  render(
    <Provider store={store}>
      <Router history={browserHistory}>
        {renderRoutes()}
      </Router>
    </Provider>,
    document.getElementById('app'));
});