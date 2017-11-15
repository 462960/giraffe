import React from 'react';
import {FormInput} from './FormInput';


export class FormInputContainer extends React.Component{
	constructor(props) {
		super(props);
		this.handleProduct = this.handleProduct.bind(this);
		this.handleInput = this.handleInput.bind(this);
		this.handleRed = this.handleRed.bind(this);
		this.handleGreen = this.handleGreen.bind(this);
		this.handleBlue = this.handleBlue.bind(this);
	}
	componentDidMount(){
		    this.focusForm.focus();
	}
	handleProduct(e){
		this.setState({product: e.target.value})
	}
	handleRed(e){
		this.setState({red: e.target.checked})
	}
	handleGreen(e){
		this.setState({green: e.target.checked})
	}
	handleBlue(e){
		this.setState({blue: e.target.checked})
	}
	handleInput(e){
		e.preventDefault();
		const product = this.state.product;
		const lettersNumbers = /^[0-9a-zA-Z]+$/;
		const red = this.state.red;
		const green = this.state.green;
		const blue = this.state.blue;
		const colors = [red, green, blue].filter(y => y == false);
		if( !product.match(lettersNumbers) ) {
			    alert('Only letters and numbers, please!');
        	} else if (product.length < 4 || product.length > 8 ){
        	    alert('Please, 4-8 characters in total!');	
        	} else if (colors.length == 3) {
        		alert(`You can't create colorless product!`);
        	} else {
			this.props.addProduct(product,red,green,blue);
		}
		this.resetForm.reset();
		this.setState({
			product: '',
			red: '',
			green: '',
			blue: ''
	  	})
	}
	render(){
		return(
			<FormInput 
			{...this.props} 
			handleInput={this.handleInput}
			handleProduct={this.handleProduct}
			handleRed={this.handleRed}
			handleGreen={this.handleGreen}
			handleBlue={this.handleBlue}
			resetRef={el => this.resetForm = el}
			focusRef={el => this.focusForm = el}
			/>
			)
	}
};