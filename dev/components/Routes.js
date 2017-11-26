import React from 'react';
import {
  Switch,
  Route,
  HashRouter
} from 'react-router-dom';
import {CreateAdvLink} from './CreateAdvLink';
import {AdvFormContainer} from './AdvFormContainer';


export const Routes = (props) =>
                  		<Switch>
                  		  <Route exact path='/advert' render={props => <AdvFormContainer {...props}/>}/>
                  		  <Route path='/' render={props => <CreateAdvLink {...props}/>}/>
                  		</Switch>
