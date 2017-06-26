import React from 'react';
import { Route } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// route components
import { App } from '../../ui/modules/home';
import { Auth } from '../../ui/modules/auth';
import { 
  Nav, 
  View,
  Edit
} from '../../ui/modules/home/components'


export const renderRoutes = (history) => (
  <MuiThemeProvider>
    <div>
 
      <Nav history={history} />

      <div style={{marginLeft: '5%', marginRight: '5%'}}>
        <Route exact path="/" component={App} />
        <Route path="/login" component={Auth}/>
        <Route path="/post/view/:id" component={View}/>
        <Route path="/post/edit/:id" component={Edit}/>
        <Route path="/create" component={Edit}/>
      </div>
    </div>
  </MuiThemeProvider>
);