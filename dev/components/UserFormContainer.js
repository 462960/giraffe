import React from 'react';
import {UserForm} from './UserForm';


export class UserFormContainer extends React.Component{
	constructor(props){
		super(props);
		//this.props.addUser = this.props.addUser.bind(this);
		//const {addUser} = this.props;
	}

	submit(values){
		const name = values.name;
		const pass = values.password;
		//this.props.addUser(name, pass);
		console.log(name, pass);
	}
	// handleName(e){
	// 	this.setState({name: e.target.value})
	// }
	render(){
		return (
			<div>
				<UserForm {...this.props} onSubmit={this.submit}/>
			</div>
			)
	}
}