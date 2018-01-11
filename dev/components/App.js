import { Routes } from "./Routes";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";
import * as actionCreators from "../action/actionCreators";

function mapStateToProps(state) {
  return {
    users: state.userReducer,
    logged: state.authReducer,
    adverts: state.advertReducer,
    modal: state.modalReducer
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

export const App = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Routes)
);
