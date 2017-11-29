
import React from 'react';
import PropTypes from 'prop-types';
import { TopBar } from '../components/TopBar';


export class TopBarContainer extends React.Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);
  }
  logOut(e) {
    e.preventDefault();
    const {logged, logoutUser, history} = this.props;
    logoutUser(logged[0].name);
    (function() {
      history.replace('/')
    })();
  }
  render() {
    return <TopBar {...this.props} logOut={this.logOut}/>
  }
}

TopBar.propTypes = {
  logged: PropTypes.array,
  logoutUser: PropTypes.func.isRequired,
  history: PropTypes.object
}