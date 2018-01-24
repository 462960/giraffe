import React from "react";
import PropTypes from "prop-types";
import { TopBar } from "../components/TopBar";

export class TopBarContainer extends React.Component {
  logOut = e => {
    e.preventDefault();
    const { logged, logOutUser, history } = this.props;
    logOutUser(logged[0].name);
    (function backHome() {
      history.replace("/");
    })();
  };

  render() {
    return <TopBar {...this.props} logOut={this.logOut} />;
  }
}

TopBar.propTypes = {
  logged: PropTypes.array,
  logOutUser: PropTypes.func.isRequired,
  history: PropTypes.object
};
