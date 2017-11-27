import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


export class DeleteAlert extends React.Component {
  constructor(props){
    super(props);
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
     this.state = {
    open: false
  };
  }
 

  handleOpen() {
    this.setState({open: true});
  };

  handleClose() {
    this.setState({open: false});
  };

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.handleClose}
      />,
      <FlatButton
        label="Yes, delete!"
        primary={true}
        onClick={this.handleClose}
      />,
    ];

    return (
      <div className="delete-alert">
        <MuiThemeProvider>
          <RaisedButton label="Alert" onClick={this.handleOpen} />
        </MuiThemeProvider>
        <MuiThemeProvider>
          <Dialog
            actions={actions}
            modal={false}
            open={this.state.open}
            onRequestClose={this.handleClose}
          >
            Are you sure?
          </Dialog>
        </MuiThemeProvider>
      </div>
    );
  }
}