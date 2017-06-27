import React from 'react';
import { Route } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// route components
import { App, Crud } from '../../ui/modules/home';
import { Auth } from '../../ui/modules/auth';
import { Nav } from '../../ui/modules/home/components';


export const renderRoutes = (history) => (
  <MuiThemeProvider>
    <div>
      <Nav history={history} />
      <div style={{marginLeft: '5%', marginRight: '5%'}}>
        <Route exact path="/" component={App} />
        <Route path="/login" component={Auth}/>
        <Route path="/post/view/:id" component={Crud}/>
        <Route path="/post/edit/:id" component={Crud}/>
        <Route path="/create" component={Crud}/>
      </div>
    </div>
  </MuiThemeProvider>
);