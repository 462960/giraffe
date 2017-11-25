import React from 'react';
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { GitHubIcon } from '../helpers/GitHubIcon';


export class TopBar extends React.Component{
	constructor(props){
		super(props);
		this.logoutForm = this.logoutForm.bind(this);
	}
	logoutForm(e){
		e.preventDefault();
		const {logged, logoutUser} = this.props;
		logoutUser(logged[0].name);
	}
	render(){
		const {logged} = this.props;
		return (
			<div>
				<MuiThemeProvider>
					<AppBar 
					title={logged.length !== 0 ? `Hello, ${logged[0].name}, glad to see you!` : `Hello, visitor!`}
					 iconElementRight={logged.length !== 0 ? <FlatButton label="Logout" onClick={this.logoutForm}/> : <IconButton/>} 
					 iconElementLeft={<IconButton href="https://github.com/462960/giraffe" target="blank"><GitHubIcon/></IconButton>}
					/>
				</MuiThemeProvider>
			</div>

			)
	}
}

TopBar.propTypes = {
	logged: PropTypes.array,
	logoutUser: PropTypes.func
}