import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../action/actionCreators';
import { Main } from './Main';
import { withRouter } from 'react-router-dom';

function mapStateToProps(state){
	return {
     users: state.userReducer,
     logged: state.authReducer,
     adverts: state.advertReducer
	}
};

function mapDispatchToProps(dispatch){
	return bindActionCreators(actionCreators, dispatch)
};

export const App = withRouter(connect(
	mapStateToProps, 
	mapDispatchToProps
	)(Main));