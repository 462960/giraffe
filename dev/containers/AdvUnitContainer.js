
import React from 'react';
import PropTypes from 'prop-types';
import { AdvUnit } from '../components/AdvUnit';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


 const styles = {
  marginRight: 12
}

export class AdvUnitContainer extends React.Component{
	constructor(props){
		super(props);
		this.pageBack = this.pageBack.bind(this);
		this.pageForward = this.pageForward.bind(this);
		
		this.state = {
			start: 0,
			end: 5
		};
	}

	pageBack(){
		this.setState({
			start: this.state.start -5,
			end: this.state.end -5
		});
	}

	pageForward(){
		this.setState({
			start: this.state.start + 5,
			end: this.state.end + 5
		});
	}


	render(){
		const {adverts} = this.props;
		const {start, end } = this.state;
		const advertItems = adverts.slice(start, end).map((item, i) => 
			<AdvUnit key={i} item={item} i={i} {...this.props}/>
		);
		return (
			<div className="adv-wrapper">
				{advertItems}
			<div className={adverts.length >= 6 ? `painators-wrapper` : `none`}>
			<div className="pagination">
				<MuiThemeProvider>
                    <RaisedButton 
                      label="Back"
                      primary={true}
                      style={styles} 
                      disabled={end <= 5 ? true : false} 
                      onClick={this.pageBack}
                      />
                </MuiThemeProvider>
                <MuiThemeProvider>
                    <RaisedButton 
                      label="Forward"
                      primary={true}
                      disabled={end >= (adverts.length + 1) ? true : false} 
                      onClick={this.pageForward}
                      />
                </MuiThemeProvider>
			</div>
			</div>
			</div>
			)
	}
}


AdvUnitContainer.propTypes = {
                    adverts: PropTypes.array
                  }

