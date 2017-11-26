
import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// const styles = {
//   marginRight: 12
// }

export const AdvForm = (props) =>
                <form action="post"
                  ref={props.resetRef}
                  className="forms"
                >
                  <div>
                    <MuiThemeProvider>
                      <TextField
                        floatingLabelText="Title"
                        errorText={props.titleError}
                        onChange={props.onChange}
                        ref={props.focusRef}
                        name="title"
                        type="text"
                      />
                    </MuiThemeProvider>
                    </div><div>
                    <MuiThemeProvider>
                      <TextField
                        floatingLabelText="Description"
                        multiLine={true}
                        rows={3}
                        errorText={props.textError}
                        onChange={props.onChange}
                        name="text"
                        type="text"
                      />
                    </MuiThemeProvider>
                  </div>
                <MuiThemeProvider>
                  <RaisedButton 
                    label="Submit Adv" 
                    type="submit" 
                    onClick={props.submitForm} 
                    //style={styles}
                    />
                </MuiThemeProvider>
               {/* <MuiThemeProvider>
                  <RaisedButton  
                    label="LogIn" 
                    onClick={props.loginForm} 
                    style={styles}
                    />
                </MuiThemeProvider>*/}
                </form>



                AdvForm.propTypes = {
                    submitForm: PropTypes.func,
                    loginForm: PropTypes.func,
                    onChange: PropTypes.func,
                    resetRef: PropTypes.func,
                    focusRef: PropTypes.func
                  }