import React from "react";
import PropTypes from "prop-types";
import AppBar from "material-ui/AppBar";
import FlatButton from "material-ui/FlatButton";
import IconButton from "material-ui/IconButton";
import { GitHubIcon } from "./GitHubIcon";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

const linkGitHub = "https://github.com/462960/giraffe";

export const TopBar = ({ logged, logOut }) => (
  <MuiThemeProvider>
    <AppBar
      title={
        logged.length !== 0
          ? `Nice to see you, ${logged[0].name}!`
          : `Hello, visitor!`
      }
      iconElementRight={
        logged.length !== 0 ? (
          <FlatButton label="Logout" onClick={logOut} />
        ) : (
          <IconButton />
        )
      }
      iconElementLeft={
        <IconButton href={linkGitHub} target="blank">
          <GitHubIcon />
        </IconButton>
      }
    />
  </MuiThemeProvider>
);

TopBar.propTypes = {
  logged: PropTypes.array,
  logOut: PropTypes.func
};
