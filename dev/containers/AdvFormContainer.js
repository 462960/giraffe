import React from 'react';
import PropTypes from 'prop-types';
import {AdvForm} from '../components/AdvForm';


export class AdvFormContainer extends React.Component{
	constructor(props){
		super(props);
		this.submitForm = this.submitForm.bind(this);
		this.onChange = this.onChange.bind(this);
		this.state = {
			titleError: '',
			textError: ''
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
		const {title, text} = this.state;
		const {logged, addAdv} = this.props;
		const author = logged[0].name;
		if ( title && text){
			addAdv(author, title, text);
			setTimeout(() => {
    			this.setState({
        			title: '',
        			text: ''
    			})
		 	}, 2000);
		 	this.resetForm.reset();
		} else if (!title){

			this.setState({
				titleError: 'Please, enter title!'
			});
			setTimeout(() => {
    			this.setState({
        			titleError: '',
        			text: ''
    			})
		 	}, 2000);
		} else if (!text){
			this.setState({
				textError: 'Please, enter the text!'
			});
			setTimeout(() => {
    			this.setState({
        			textError: '',
        			title: ''
    			})
		 	}, 2000);
		} 
		
	}

	render(){
		const {titleError, textError} = this.state;
		return (
			<div>
				<AdvForm 
				{...this.props}
				onChange={this.onChange} 
				submitForm={this.submitForm}
				focusRef={el => this.focusForm = el} 
				resetRef={el => this.resetForm = el} 
				titleError={titleError}
				textError={textError}
				/>
			</div>
			)
	}
}

AdvFormContainer.propTypes = {
                    addAdv: PropTypes.func,
                    logged: PropTypes.array
                  }