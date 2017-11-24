
import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { ValidatorForm } from 'react-form-validator-core';
import { TextValidator} from 'react-material-ui-form-validator';

// const styles = {
//   formStyle: {
//     width: '200px',
//     margin: '0 auto'
    //float: 'right',
    //border: '1px solid green'
//   },
// };

const styles = {
  marginRight: 12
}



//export const UserForm = (props) =>
//                <ValidatorForm
                //ref="form"
                // ref={props.resetRef}
                //onSubmit={props.submitForm}
                //onError={errors => console.log(errors)}
            // >
            //    <MuiThemeProvider>
            //     <TextValidator
            //          floatingLabelText="User name"
            //          onChange={props.onChange}
            //          ref={props.resetRef}
            //          ref={props.focusRef}
            //          name="name"
            //          value={props.name}
            //          validators={['required']}
            //          errorMessages={['this field is required']}
            //       />
            //      </MuiThemeProvider>
            //      <MuiThemeProvider>
            //     <TextValidator
            //          floatingLabelText="Password"
            //          onChange={props.onChange}
            //          ref={props.resetRef}
            //          name="pass"
            //          value={props.pass}
            //          validators={['required']}
            //          errorMessages={['this field is required']}
            //       />
            //      </MuiThemeProvider>
            //      <MuiThemeProvider>
            //        <RaisedButton label="Register User" type="submit"  style={styles}/>                 
            //       </MuiThemeProvider>
            //      <MuiThemeProvider>
            //        <RaisedButton  label="LogIn" />
            //      </MuiThemeProvider>
            // </ValidatorForm>

export const UserForm = (props) =>
                <form action="post"
                ref={props.resetRef}
                className="user-form"
                >
                  <div>
                    <MuiThemeProvider>
                      <TextField
                      onChange={props.onChange}
                      ref={props.focusRef}
                      name="name"
                      />
                    </MuiThemeProvider>
                    </div><div>
                    <MuiThemeProvider>
                      <TextField
                      onChange={props.onChange}
                      name="pass"
                      />
                    </MuiThemeProvider>
                  </div>
                <MuiThemeProvider>
                  <RaisedButton label="Register User" type="submit" onClick={props.submitForm} style={styles}/>
                </MuiThemeProvider>
                <MuiThemeProvider>
                  <RaisedButton  label="LogIn" onClick={props.loginForm} style={styles}/>
                </MuiThemeProvider>
                <MuiThemeProvider>
                  <RaisedButton  label="LogOut" onClick={props.logoutForm}/>
                </MuiThemeProvider>
                </form>



                UserForm.propTypes = {
                    submitForm: PropTypes.func,
                    loginForm: PropTypes.func,
                    //logoutForm: PropTypes.func,
                    onChange: PropTypes.func,
                    resetRef: PropTypes.func,
                    focusRef: PropTypes.func
                  }