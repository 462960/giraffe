
import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const styles = {
  marginRight: 12
}

export const AdvFormEdit = (props) => {
                const {
                      logged,
                      history, 
                      titleError, 
                      textError, 
                      onChange, 
                      submitForm,
                      title,
                      text
                                } = props;
                  
               return  (<form action="post"
                                  className="forms"
                                > 
                                  <div>{`Created by ${logged[0].name}` }</div>
                                  <div>
                                    <MuiThemeProvider>
                                      <TextField
                                        floatingLabelText="Title"
                                        errorText={titleError}
                                        onChange={onChange}
                                        defaultValue={title}
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
                                        defaultValue={text}
                                        name="text"
                                        type="text"
                                      />
                                    </MuiThemeProvider>
                                  </div>
                                <MuiThemeProvider>
                                  <RaisedButton 
                                    label="Save"
                                    primary={true}  
                                    onClick={submitForm}
                                    style={styles} 
                                    />
                                </MuiThemeProvider>
                                <MuiThemeProvider>
                                  <RaisedButton 
                                    label="Back Home"
                                    primary={true} 
                                    onClick={() => history.replace('/')}
                                    />
                                </MuiThemeProvider>
                                </form>)
             }



                AdvFormEdit.propTypes = {
                    submitForm: PropTypes.func.isRequired,
                    onChange: PropTypes.func.isRequired,
                    logged: PropTypes.array.isRequired,
                    history: PropTypes.object.isRequired,
                    titleError: PropTypes.string.isRequired, 
                    textError: PropTypes.string.isRequired,
                    title: PropTypes.string.isRequired,
                    text: PropTypes.string.isRequired
                  }