import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../action/actionCreators';
import { Main } from './Main';

function mapStateToProps(state){
	return {
     user: state.form.regUser,
	}
};

function mapDispatchToProps(dispatch){
	return bindActionCreators(actionCreators, dispatch)
};

export const App = connect(
	mapStateToProps, 
	mapDispatchToProps
	)(Main);