import React from 'react';
import { Route } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// route components
import { App } from '../../ui/modules/home';
import { Auth } from '../../ui/modules/auth';


export const renderRoutes = () => (
  <MuiThemeProvider>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/login" component={Auth}/>
    </div>
  </MuiThemeProvider>
);