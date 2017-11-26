import React from 'react';
import {Link} from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


export const CreateAdvLink = () =>
							<div className="create-link">
									<Link className="advert-link" to="/advert" replace >Create Advertisement</Link>
							</div>