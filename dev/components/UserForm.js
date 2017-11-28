
import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


const styles = {
  marginRight: 12
}

export const UserForm = (props) => {
              const {
                  resetRef, 
                  focusRef, 
                  nameError, 
                  passError, 
                  onChange, 
                  submitForm, 
                  loginForm
                            } = props;
              return  (<form action="post"
                                  ref={resetRef}
                                  className="forms"
                                >
                                  <div>
                                    <MuiThemeProvider>
                                      <TextField
                                        floatingLabelText="User name"
                                        errorText={nameError}
                                        onChange={onChange}
                                        ref={focusRef}
                                        name="name"
                                      />
                                    </MuiThemeProvider>
                                    </div><div>
                                    <MuiThemeProvider>
                                      <TextField
                                        floatingLabelText="Password"
                                        errorText={passError}
                                        onChange={onChange}
                                        name="pass"
                                        type="password"
                                      />
                                    </MuiThemeProvider>
                                  </div>
                                <MuiThemeProvider>
                                  <RaisedButton 
                                    label="Register User"
                                    primary={true} 
                                    type="submit" 
                                    onClick={submitForm} 
                                    style={styles}
                                    />
                                </MuiThemeProvider>
                                <MuiThemeProvider>
                                  <RaisedButton  
                                    label="LogIn"
                                    primary={true} 
                                    onClick={loginForm} 
                                    />
                                </MuiThemeProvider>
                                </form>)
            }

                UserForm.propTypes = {
                    submitForm: PropTypes.func,
                    loginForm: PropTypes.func,
                    onChange: PropTypes.func,
                    resetRef: PropTypes.func,
                    focusRef: PropTypes.func,
                    nameError: PropTypes.string, 
                    passError: PropTypes.string
                  }