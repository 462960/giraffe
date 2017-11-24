import React from 'react';
import PropTypes from 'prop-types';
import {UserForm} from './UserForm';


export class UserFormContainer extends React.Component{
	constructor(props){
		super(props);
		this.submitForm = this.submitForm.bind(this);
		this.loginForm = this.loginForm.bind(this);
		this.logoutForm = this.logoutForm.bind(this);
		this.onChange = this.onChange.bind(this);
		// this.state = {
		// 	name: '',
		// 	pass: ''
		// }
	}
	componentDidMount(){
		this.focusForm.focus();
	}
	onChange(e){
		this.setState({[e.target.name]: e.target.value})
	}
	submitForm(e){
		e.preventDefault();
		const {name, pass} = this.state;
		this.props.addUser(name, pass);
		this.resetForm.reset();
	}
	loginForm(e){
		e.preventDefault();
		const {users, authUser} = this.props;
		const {name, pass} = this.state;
		// Find user index
		const i = users.findIndex(x => x.name == name);
		const user = users[i];
		// Authorise user
		(user.pass === pass) && authUser(user.id)
		// Reset Form
		this.resetForm.reset();
	}
	logoutForm(e){
		e.preventDefault();
		const {logged, logoutUser} = this.props;
		logoutUser(logged[0].id);
	}
	render(){
		//const {name, pass} = this.state;
		return (
			<div>
				<UserForm 
				{...this.props}
				onChange={this.onChange} 
				submitForm={this.submitForm}
				loginForm={this.loginForm}
				logoutForm={this.logoutForm}
				focusRef={el => this.focusForm = el} 
				resetRef={el => this.resetForm = el} 
				//name={name}
				//pass={pass}
				/>
			</div>
			)
	}
}

UserFormContainer.propTypes = {
                    addUser: PropTypes.func,
                    authUser: PropTypes.func,
                    logoutUser: PropTypes.func,
                    users: PropTypes.array,
                    logged: PropTypes.array
                  }