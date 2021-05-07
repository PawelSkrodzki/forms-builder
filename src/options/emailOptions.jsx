import React from 'react';

class EmailOptions extends React.Component {
  state = {
    name: '',
    placeHolder: '',
    className: '',
    id: ''
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  onFormChange = () => {
    this.props.onChange(this.state);
  };

  render() {
    return (
      <div>
        <form onChange={this.onFormChange}>
          <label>
            Name
            <input name="name" type="text" value={this.state.inputName} onChange={this.handleChange}></input>
          </label>
          <label>
            Placeholder
            <input name="placeHolder" type="text" value={this.state.inputPlaceholder} onChange={this.handleChange}></input>
          </label>
          <label>
            Class name
            <input name="className" type="text" value={this.state.inputClassName} onChange={this.handleChange} />
          </label>
          <label>
            Id
            <input name="id" type="text" value={this.state.inputId} onChange={this.handleChange} />
          </label>
        </form>
      </div>
    );
  }
}

export default EmailOptions;
