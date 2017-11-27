import React from 'react';
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { GitHubIcon } from '../helpers/GitHubIcon';

export const TopBar = (props) => {
		const {logged, logOut} = props;
		return (
			<div>
				<MuiThemeProvider>
					<AppBar 
					title={logged.length !== 0 ? `Hello, ${logged[0].name}, glad to see you!` : `Hello, visitor!`}
					 iconElementRight={logged.length !== 0 ? <FlatButton label="Logout" onClick={logOut}/> : <IconButton/>} 
					 iconElementLeft={<IconButton href="https://github.com/462960/giraffe" target="blank"><GitHubIcon/></IconButton>}
					/>
				</MuiThemeProvider>
			</div>
			)
	}

TopBar.propTypes = {
	logged: PropTypes.array,
	logOut: PropTypes.func
}