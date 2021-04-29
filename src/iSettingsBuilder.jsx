import React from 'react';
import ReactDOM from 'react-dom';
import Container from '@material-ui/core/Container';
class TextAreaOptions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleChange = this.handleChange.bind(this);
    this.onSubmitForm = this.onSubmitForm.bind(this);
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onSubmitForm() {
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <form>
          <label>
            Name
            <input name="name" type="text" value={this.state.inputName} onChange={this.handleChange} />
          </label>
          <label>
            Placeholder
            <input name="placeholder" type="text" value={this.state.inputPlaceholder} onChange={this.handleChange} />
          </label>
          <label>
            Class name
            <input name="className" type="text" value={this.state.inputClassName} onChange={this.handleChange} />
          </label>
          <label>
            Id
            <input name="id" type="text" value={this.state.inputId} onChange={this.handleChange} />
          </label>
          <p onClick={this.onSubmitForm}>Submit</p>
        </form>
      </div>
    );
  }
}

class EmailOptions extends React.Component {
  render() {
    return (
      <div>
        <label>
          email name
          <input type="text"></input>
        </label>

        <label>
          email placeholder
          <input type="text"></input>
        </label>
      </div>
    );
  }
}

class GenerateFormButton extends React.Component {
  render() {
    return <button>Add element</button>;
  }
}

class ISettingsBuilder extends React.Component {
  state = {
    options: [
      {
        optionName: 'Select…',
        value: null
      },
      {
        optionName: 'textArea',
        value: 'textArea'
      },
      {
        optionName: 'email',
        value: 'email'
      },
      {
        optionName: 'submit',
        value: 'submit'
      },
      {
        optionName: 'header',
        value: 'header'
      }
    ]
  };

  handleChange = (event) => {
    this.setState({ value: event.target.value });

    switch (event.target.value) {
      case 'textArea':
        return ReactDOM.render(<TextAreaOptions />, document.getElementById('option-conatiner'));
      case 'email':
        return ReactDOM.render(<EmailOptions />, document.getElementById('option-conatiner'));
      case 'header':
        return console.log('email');
      case 'submit':
        return console.log('submit');
      default:
        return console.log('no option selected...');
    }
  };

  render() {
    const { options, value } = this.state;

    return (
      <Container>
        <select onChange={this.handleChange} value={value}>
          {options.map((item) => (
            <option key={item.value} value={item.value}>
              {item.optionName}
            </option>
          ))}
        </select>
        <div id="option-conatiner"></div>
        <GenerateFormButton />
      </Container>
    );
  }
}

// class ISettingsBuilder extends React.Component {
//   render() {
//     return (
//       <Container>
//         <h1>Select form options</h1>
//         <form></form>
//       </Container>
//     );
//   }
// }

export default ISettingsBuilder;
