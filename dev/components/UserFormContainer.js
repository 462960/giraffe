import React from 'react';
import {UserForm} from './UserForm';


export class UserFormContainer extends React.Component{
	constructor(props){
		super(props);
		this.submitForm = this.submitForm.bind(this);
		this.onChange = this.onChange.bind(this);
		this.state = {
			name: '',
			pass: ''
		}
	}
	componentDidMount(){
		this.focusForm.focus();
	}
	onChange(e){
		this.setState({[e.target.id]: e.target.value})
	}
	submitForm(e){
		e.preventDefault();
		const {name, pass} = this.state;
		this.props.addUser(name, pass);
		console.log('I am Register!');
		this.resetForm.reset();
	}
	render(){
		const {name, pass} = this.state;
		return (
			<div>
				<UserForm 
				{...this.props}
				onChange={this.onChange} 
				submitForm={this.submitForm}
				focusRef={el => this.focusForm = el} 
				resetRef={el => this.resetForm = el} 
				name={name}
				pass={pass}
				/>
			</div>
			)
	}
}