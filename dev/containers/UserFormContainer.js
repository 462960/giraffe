import React from 'react';
import PropTypes from 'prop-types';
import {UserForm} from '../components/UserForm';


export class UserFormContainer extends React.Component{
	constructor(props){
		super(props);
		this.submitForm = this.submitForm.bind(this);
		this.loginForm = this.loginForm.bind(this);
		this.onChange = this.onChange.bind(this);
		this.state = {
			nameError: '',
			passError: ''
		}

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
		const {users, addUser, authUser} = this.props;
		// To prevent doubled registration, allowed only non existing names
		const i = users.findIndex(x => x.name === name);
		if (i === -1 && name && pass){
			addUser(name, pass);
			authUser(name);
		} else if (i >= 0){
			this.setState({
				nameError: 'No way, user exists!'
			});
			setTimeout(() => {
    			this.setState({
        			nameError: ''
    			})
		 	}, 2000);
		} else if (!name){
			this.setState({
				nameError: 'Please, enter your name!'
			});
			setTimeout(() => {
    			this.setState({
        			nameError: ''
    			})
		 	}, 2000);
		}else if (!pass){
			this.setState({
				passError: 'Password required!'
			});
			setTimeout(() => {
    			this.setState({
        			passError: ''
    			})
		 	}, 2000);
		} 
		this.resetForm.reset();
	}

	loginForm(e){
		e.preventDefault();
		const {users, authUser, logged} = this.props;
		const {name, pass} = this.state;
		// Find user index
		const i = users.findIndex(x => x.name == name);
		const user = users[i];
		// Authorize and logIn user 
		if (i >= 0 && user.pass === pass) {
			authUser(user.name)
		} else {
			this.setState({
				nameError: 'Something went wrong...'
			});
			setTimeout(() => {
    			this.setState({
        			nameError: ''
    			})
		 	}, 2000); 
		} 
		// Reset Form
		this.resetForm.reset();
	}
	render(){
		const {nameError, passError} = this.state;
		return (
			<div>
				<UserForm 
				{...this.props}
				onChange={this.onChange} 
				submitForm={this.submitForm}
				loginForm={this.loginForm}
				focusRef={el => this.focusForm = el} 
				resetRef={el => this.resetForm = el} 
				nameError={nameError}
				passError={passError}
				/>
			</div>
			)
	}
}

UserFormContainer.propTypes = {
                    addUser: PropTypes.func,
                    authUser: PropTypes.func,
                    users: PropTypes.array,
                    logged: PropTypes.array
                  }