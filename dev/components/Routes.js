import React from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';
import {Main} from './Main';
import {AdvFormEditContainer} from '../containers/AdvFormEditContainer';
import { ErrorBoundary} from '../helpers/ErrorBoundary';
import { TopBarContainer} from '../containers/TopBarContainer';
import { DeleteAlert} from './DeleteAlert';
//import { CreateAdvLink} from './CreateAdvLink';


export const Routes = (props) => {

  const {
    adverts, 
    users, 
    logged,
    logoutUser,
    addAdv,
    addUser,
    authUser,
    hideModal,
    showModal,
    modal,
    removeAdv
          } = props;

  return (
  <div className="wrapper">
    <ErrorBoundary>
			<DeleteAlert {...props}/>
			<TopBarContainer {...props}/>
      <Switch>
        <Route exact path='/edit' render={props => 
          <AdvFormEditContainer 
          {...props}
          />}/>
        <Route path='/' render={props => 
          <Main 
          {...props} 
          adverts={adverts} 
          users={users} 
          logged={logged}
          logoutUser={logoutUser}
          addAdv={addAdv}
          addUser={addUser}
          authUser={authUser}
          hideModal={hideModal}
          showModal={showModal}
          modal={modal}
          removeAdv={removeAdv}
          />}/>
      </Switch>
    </ErrorBoundary>
  </div>
        )}
