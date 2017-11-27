import React from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';



export const AdvUnit = (props) => {
				const {
						i,
						item, 
						logged,
						adverts, 
						removeAdv, 
							} = props;

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

				 AdvUnit.propTypes = {
                    i: PropTypes.number,
                    item: PropTypes.object,
                    logged: PropTypes.array,
                    adverts: PropTypes.array,
                    removeAdv: PropTypes.func
                  }
						

