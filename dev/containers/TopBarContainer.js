import React from 'react';
import PropTypes from 'prop-types';
import { TopBar } from '../components/TopBar';


export class TopBarContainer extends React.Component{
	constructor(props){
		super(props);
		this.logOut = this.logOut.bind(this);
	}
	logOut(e){
		e.preventDefault();
		const {logged, logoutUser} = this.props;
		logoutUser(logged[0].name);
	}
	render(){
		return 	<TopBar {...this.props} logOut={this.logOut}/>
	}
}

TopBar.propTypes = {
	logged: PropTypes.array,
	logoutUser: PropTypes.func
}