import React from 'react';
import Paper from 'material-ui/Paper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';



export const AdvUnit = (props) =>
						<div>
						<MuiThemeProvider>
							<Paper className="paper-wrap" zDepth={2}>
							<div className="paper">ABC</div>
							</Paper>
						</MuiThemeProvider>
						<MuiThemeProvider>
							<Paper className="paper-wrap" zDepth={2}>
							<div className="paper">Def</div>
							</Paper>
						</MuiThemeProvider>
						</div>
						

