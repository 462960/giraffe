
import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export const AdvForm = (props) => {
                const {
                      logged, 
                      titleError, 
                      textError, 
                      focusRef, 
                      resetRef, 
                      onChange, 
                      submitForm
                                } = props;
               return  (<form action="post"
                                  ref={resetRef}
                                  className="forms"
                                >
                                  <div>
                                    <MuiThemeProvider>
                                      <TextField
                                        floatingLabelText="Title"
                                        errorText={titleError}
                                        onChange={onChange}
                                        ref={focusRef}
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
                                        errorText={textError}
                                        onChange={onChange}
                                        name="text"
                                        type="text"
                                      />
                                    </MuiThemeProvider>
                                  </div>
                                <MuiThemeProvider>
                                  <RaisedButton 
                                    label={logged.length !== 0 ? `Create Adv, ${logged[0].name}` : `` } 
                                    type="submit" 
                                    onClick={submitForm} 
                                    />
                                </MuiThemeProvider>
                                </form>)
             }



                AdvForm.propTypes = {
                    submitForm: PropTypes.func,
                    onChange: PropTypes.func,
                    resetRef: PropTypes.func,
                    focusRef: PropTypes.func,
                    logged: PropTypes.array,
                    titleError: PropTypes.string, 
                    textError: PropTypes.string
                  }