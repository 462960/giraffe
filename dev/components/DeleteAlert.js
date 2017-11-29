
import React from 'react';
import PropTypes from 'prop-types';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


export class DeleteAlert extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleClose() {
    const {hideModal, logged} = this.props;
    hideModal(logged[0].name);
  }
  ;

  handleDelete() {
    const {hideModal, removeAdv, adverts, modal, logged} = this.props;
    removeAdv(adverts, modal[0].i);
    hideModal(logged[0].name);
  }
  ;

  render() {
    const {modal, logged} = this.props;
    const actions = [
      <FlatButton
      label="Cancel"
      primary={true}
      onClick={this.handleClose}
      />,
      <FlatButton
      label="Yes, delete, please!"
      primary={true}
      onClick={this.handleDelete}
      />,
    ];

    return (
      <div className="delete-alert">
        <MuiThemeProvider>
          <Dialog
      actions={actions}
      modal={false}
      open={modal.length == 0 ? false : true}
      onRequestClose={this.handleClose}
      >
            {logged.length !== 0 ? `${logged[0].name}, are you sure?` : ``}
          </Dialog>
        </MuiThemeProvider>
      </div>
      );
  }
}

DeleteAlert.propTypes = {
  adverts: PropTypes.array,
  modal: PropTypes.array,
  logged: PropTypes.array,
  removeAdv: PropTypes.func,
  hideModal: PropTypes.func
}