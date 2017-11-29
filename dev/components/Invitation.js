import React from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';



export const Invitation = (props) => <div className="adv-wrapper">
							<MuiThemeProvider>
								<Paper className="adv-unit" zDepth={2}>
									<h3>
										{props.logged.length !== 0 ?
    `Create your first adv, ${props.logged[0].name}!`
    : `Join us, visitor! There is no advertisement yet...`}
									</h3>
									<p>Having more than 5 items of advertisement enables pagination</p>
								</Paper>
							</MuiThemeProvider>
						</div>

Invitation.propTypes = {
  logged: PropTypes.array
}


