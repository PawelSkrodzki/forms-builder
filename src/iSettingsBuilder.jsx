import React, { Context } from 'react';
import ReactDOM from 'react-dom';
import Container from '@material-ui/core/Container';
import TextAreaOptions from './options/textAreaOptions';
import EmailOptions from './options/emailOptions';
import HeaderOptions from './options/headerOptions';
import SubmitOptions from './options/submitOptions';

// React context - reducer / useReducer

class ISettingsSelector extends React.Component {
  constructor(props) {
    super(props);

    this.state = { value: '' };
  }

  handleChange = (event) => {
    this.props.onInputChange(event.target.value);
  };

  render() {
    return (
      <Container>
        <select onChange={this.handleChange}>
          <option key={'Select…'} value={'Select…'}>
            Select…
          </option>
          <option key={'textArea'} value={'textArea'}>
            textArea
          </option>
          <option key={'email'} value={'email'}>
            email
          </option>
          <option key={'submit'} value={'submit'}>
            submit
          </option>
          <option key={'header'} value={'header'}>
            header
          </option>
        </select>
      </Container>
    );
  }
}

class ISettingsBuilder extends React.Component {
  constructor(props) {
    super(props);

    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.handleOptionsChange = this.handleOptionsChange.bind(this);
    this.onClick = this.onClick.bind(this);

    this.state = { inputType: '', inputSettings: '' };
  }

  handleSelectChange(value) {
    this.setState({ inputType: value });
  }

  handleOptionsChange(value) {
    this.setState({ inputSettings: value });
  }

  onClick = () => {
    console.log(this.state);
  };

  render() {
    let inputType = this.state.inputType;

    let inputOptions;

    switch (inputType) {
      case 'textArea':
        inputOptions = <TextAreaOptions onChange={this.handleOptionsChange} />;
        break;
      case 'email':
        inputOptions = <EmailOptions onChange={this.handleOptionsChange} />;
        break;
      case 'header':
        inputOptions = <HeaderOptions onChange={this.handleOptionsChange} />;
        break;
      case 'submit':
        inputOptions = <SubmitOptions onChange={this.handleOptionsChange} />;
        break;
      default:
        console.log('Selecy your input');
        break;
    }

    return (
      <Container>
        <ISettingsSelector onInputChange={this.handleSelectChange} />
        {inputOptions}
        <p onClick={this.onClick}>dodaj element(sprawdź stan)</p>
      </Container>
    );
  }
}

export default ISettingsBuilder;
