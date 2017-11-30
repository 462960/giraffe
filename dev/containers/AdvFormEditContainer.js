import React from 'react';
import PropTypes from 'prop-types';
import { AdvFormEdit } from '../components/AdvFormEdit';


export class AdvFormEditContainer extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.onChange = this.onChange.bind(this);
    const {adverts, location} = this.props;
    const i = adverts.findIndex(x => x.id == location.pathname.substr(1));
    const advert = adverts[i];
    this.state = {
      titleError: '',
      textError: '',
      title: advert.title,
      text: advert.text
    }
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  componentWillUnmount() {
    this.setState({
      title: '',
      text: ''
    });
  }

  submitForm(e) {
    const {title, text} = this.state;
    const {logged, removeAdv, addAdv, adverts, location, history} = this.props;
    const i = adverts.findIndex(x => x.id == location.pathname.substr(1));
    const advert = adverts[i];
    const author = logged[0].name;

    if (title && text) {
      addAdv(author, title, text);
      removeAdv(adverts, i);
      (function backHome() {
        history.replace('/')
      })();
    } else if (!title) {
      this.setState({
        titleError: 'Please, enter edited title!'
      });
      setTimeout(() => {
        this.setState({
          titleError: ''
        })
      }, 2000);
    } else if (!text) {
      this.setState({
        textError: 'Please, enter edited text!'
      });
      setTimeout(() => {
        this.setState({
          textError: ''
        })
      }, 2000);
    }
  }

  render() {
    const {titleError, textError, title, text} = this.state;
    return (
      <div>
        <AdvFormEdit
      {...this.props}
      onChange={this.onChange}
      submitForm={this.submitForm}
      titleError={titleError}
      textError={textError}
      title={title}
      text={text}
      />
      </div>
    )
  }
}

AdvFormEditContainer.propTypes = {
  addAdv: PropTypes.func.isRequired,
  removeAdv: PropTypes.func.isRequired,
  logged: PropTypes.array,
  history: PropTypes.object
}