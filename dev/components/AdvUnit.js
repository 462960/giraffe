import React from 'react';
import Paper from 'material-ui/Paper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';



export const AdvUnit = (props) => {
				const {item, adverts, removeAdv, i, logged} = props;
				//const logged = true;
				return	(<div>
							<MuiThemeProvider>
								<Paper className="adv-unit" zDepth={2}>
									<div className="adv-unit-date">{item.date}</div>
									<div className="adv-unit-author">Author: {item.author}</div>
									<h6>{item.title}</h6>
									<p>{item.text}</p>
									<div className={(logged.length !== 0) && (logged[0].name == item.author) ? '' : 'none' }>
									<button>Edit</button>
									<button 
									className="remove-adv"
									onClick={removeAdv.bind(null, adverts, i)}
									>
									&times;
									</button>
									</div>
								</Paper>
							</MuiThemeProvider>
						</div>)}
						

