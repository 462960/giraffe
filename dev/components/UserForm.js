
import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
//import { ValidatorForm } from 'react-form-validator-core';
//import { TextValidator} from 'react-material-ui-form-validator';


const styles = {
  marginRight: 12
}

export const UserForm = (props) =>
                <form action="post"
                  ref={props.resetRef}
                  className="user-form"
                >
                  <div>
                    <MuiThemeProvider>
                      <TextField
                        floatingLabelText="User name"
                        errorText={props.nameError}
                        onChange={props.onChange}
                        ref={props.focusRef}
                        name="name"
                      />
                    </MuiThemeProvider>
                    </div><div>
                    <MuiThemeProvider>
                      <TextField
                        floatingLabelText="Password"
                        errorText={props.passError}
                        onChange={props.onChange}
                        name="pass"
                        type="password"
                      />
                    </MuiThemeProvider>
                  </div>
                <MuiThemeProvider>
                  <RaisedButton 
                    label="Register User" 
                    type="submit" 
                    onClick={props.submitForm} 
                    style={styles}
                    />
                </MuiThemeProvider>
                <MuiThemeProvider>
                  <RaisedButton  
                    label="LogIn" 
                    onClick={props.loginForm} 
                    style={styles}
                    />
                </MuiThemeProvider>
                </form>



                UserForm.propTypes = {
                    submitForm: PropTypes.func,
                    loginForm: PropTypes.func,
                    onChange: PropTypes.func,
                    resetRef: PropTypes.func,
                    focusRef: PropTypes.func
                  }