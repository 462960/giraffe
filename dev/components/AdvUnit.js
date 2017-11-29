
import React from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';



export class AdvUnit extends React.Component {
		constructor(props){
			super(props);
			this.handleModal = this.handleModal.bind(this);
		}

		handleModal(){
			const { showModal, i, logged } = this.props;
			showModal(logged[0].name, i);
		}

		render(){
			const { item, logged, history } = this.props;

			return	(<div>
						<MuiThemeProvider>
							<Paper className="adv-unit" zDepth={2}>
								<div className="adv-unit-date">{item.date}</div>
								<div className="adv-unit-author">Author: {item.author}</div>
								<h6>{item.title}</h6>
								<p>{item.text}</p>
								<div className={(logged.length !== 0) && (logged[0].name == item.author) ? '' : 'none' }>
									<MuiThemeProvider>
                                  <RaisedButton 
                                    label="Edit" 
                                    onClick={() => history.replace(`/${item.id}`)}
                                    />
                                </MuiThemeProvider>
									<button 
									className="remove-adv"
									onClick={this.handleModal}
									>
									&times;
									</button>
								</div>
							</Paper>
						</MuiThemeProvider>
					</div>)
				}
			}

				 AdvUnit.propTypes = {
                    item: PropTypes.object,
                    logged: PropTypes.array,
                    removeAdv: PropTypes.func.isRequired,
                    showModal: PropTypes.func.isRequired
                  }
						

