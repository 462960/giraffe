import React from 'react';
import {Link} from 'react-router-dom';


export class AdvFormEditContainer extends React.Component{
	constructor(props){
		super(props);
	}


render() {
	return (
		<div>
		I am AdvFormEditContainer
		<Link className="advert-link" to="/rel" replace >To CreateAdvLink</Link>
		</div>
	)
}
}