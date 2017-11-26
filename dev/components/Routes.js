import React from 'react';
import {
  Switch,
  Route,
  HashRouter
} from 'react-router-dom';
import {CreateAdvLink} from './CreateAdvLink';
import {CreateAdvForm} from './CreateAdvForm';


export const Routes = (props) =>
                  		<Switch>
                  		  <Route exact path='/advert' render={props => <CreateAdvForm {...props}/>}/>
                  		  <Route path='/' render={props => <CreateAdvLink {...props}/>}/>
                  		</Switch>
