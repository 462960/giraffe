import React from 'react';
import PropTypes from 'prop-types';
import { AdvUnit } from '../components/AdvUnit';


export class AdvUnitContainer extends React.Component{
	constructor(props){
		super(props);
	}


	render(){
		const {adverts} = this.props;
		const advertItems = adverts.map((item, i) => 
			<AdvUnit key={i} item={item} i={i} {...this.props}/>
		);
		return (
			<div className="adv-wrapper">
				{advertItems}
			</div>
			)
	}
}


AdvUnitContainer.propTypes = {
                    adverts: PropTypes.array
                  }

