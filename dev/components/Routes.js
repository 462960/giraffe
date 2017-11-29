
import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import { Main } from './Main';
import { AdvFormEditContainer } from '../containers/AdvFormEditContainer';
import { ErrorBoundary } from '../helpers/ErrorBoundary';
import { TopBarContainer } from '../containers/TopBarContainer';
import { DeleteAlert } from './DeleteAlert';


export const Routes = (props) => {

  const {adverts, users, logged, logoutUser, addAdv, addUser, authUser, hideModal, showModal, modal, removeAdv} = props;

  return (
    <div className="wrapper">
    <ErrorBoundary>
      <DeleteAlert {...props}/>
      <TopBarContainer {...props}/>
      <Switch>
        <Route exact path='/:id' render={props => <AdvFormEditContainer
      {...props}
      logged={logged}
      addAdv={addAdv}
      removeAdv={removeAdv}
      adverts={adverts}
      />}/>
        <Route path='/' render={props => <Main
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
  )
}


Routes.propTypes = {
  adverts: PropTypes.array,
  users: PropTypes.array,
  logged: PropTypes.array,
  logoutUser: PropTypes.func,
  addAdv: PropTypes.func,
  addUser: PropTypes.func,
  authUser: PropTypes.func,
  hideModal: PropTypes.func,
  showModal: PropTypes.func,
  modal: PropTypes.array,
  removeAdv: PropTypes.func
}
