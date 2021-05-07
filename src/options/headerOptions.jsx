import React from 'react';

class HeaderOptions extends React.Component {
  state = {
    inputText: '',
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
            Text
            <input name="inputText" type="text" value={this.state.inputText} onChange={this.handleChange}></input>
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

export default HeaderOptions;
