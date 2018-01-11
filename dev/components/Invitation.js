import React from "react";
import PropTypes from "prop-types";
import Paper from "material-ui/Paper";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

const firstAdv = `Create your first adv,`;
const joinUs = `Join us, visitor! There is no advertisement yet...`;

export const Invitation = props => (
  <div className="adv-wrapper">
    <MuiThemeProvider>
      <Paper className="adv-unit" zDepth={2}>
        <h3>
          {props.logged.length !== 0
            ? `${firstAdv} ${props.logged[0].name}!`
            : joinUs}
        </h3>
        <p>The App uses localStorage of your browser</p>
        <p>GitHub link at the Top Left corner</p>
        <p>There is no limit on registered users amount</p>
        <p>Having more than 5 items of advertisement enables pagination</p>
        <p>
          User can create any number of adverisement units but is allowed to
          edit/delete only "owned" ones
        </p>
        <p>Any form submit enables verification</p>
        <p>User can log out at any stage of interaction</p>
      </Paper>
    </MuiThemeProvider>
  </div>
);

Invitation.propTypes = {
  logged: PropTypes.array
};
