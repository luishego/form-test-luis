import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  constructor (props) {
    super(props);
    this.state = {
      fromEmail: '',
      bccEmail: '',
      confirmation: '',
      typeField: '',
      statusField: '',
      country: '',
      languageField: '',
      freeText: '',
      formErrors: {
        fromEmail: '',
        bccEmail: '',
        confirmation: '',
        typeField: '',
        statusField: '',
        country: '',
        languageField: '',
        freeText: ''
      },
      formValid: false
    }
  }

  validateInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const type = e.target.type;
    this.setState({[name]: value}, () => {
      this.validateField(name, type, value);
    });
  }

  validateField(fieldName, inputType, value) {
    let fieldValidationErrors = this.state.formErrors;
    let isValid = this.state[fieldName+'valid'];

    switch(inputType) {
      case 'email':
        isValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors[fieldName] = isValid ? '' : ' is invalid';
        break;
      case 'select-one':
      case 'textarea':
        isValid = value.match(/^[a-z\d\s]+$/i);
        fieldValidationErrors[fieldName] = isValid ? '' : ' is invalid';
        break;
      default:
        break;
    }
    this.setState(
      {
        formErrors: fieldValidationErrors,
        [fieldName+'Valid']: isValid,
      }, this.validateForm
    );
  }

  validateForm() {
    let isFormValid = true;

    for (var fieldName in this.state.formErrors) {
      if (this.state.formErrors.hasOwnProperty(fieldName)) {
        if (this.state.formErrors[fieldName] !== '') {
          isFormValid = false;
          break;
        }
      }
    }
    this.setState({formValid: isFormValid});
  }

  errorClass(error) {
    return(error.length === 0 ? '' : 'has-error');
  }

  handleNewRoute = () => {
    this.props.history.push({
      pathname: `/welcome`,
      query: this.state
    })
 }

  render () {
    return (
      <form className="demoForm">
        <h2>Confirmaciones</h2>
        <div className={`form-group ${this.errorClass(this.state.formErrors.confirmation)}`}>
          <select name="confirmation" value={this.state.confirmation} onChange={this.validateInput}>
            <option value="">Confirmación</option>
            <option value="signup">Signup</option>
          </select>
        </div>
        <div className={`form-group ${this.errorClass(this.state.formErrors.typeField)}`}>
          <select name="typeField" value={this.state.typeField} onChange={this.validateInput}>
            <option value="">Tipo</option>
            <option value="distribuidor">Distribuidor</option>
          </select>
        </div>
        <div className={`form-group ${this.errorClass(this.state.formErrors.statusField)}`}>
          <select name="statusField" value={this.state.statusField} onChange={this.validateInput}>
            <option value="">Seleciona un estatus</option>
            <option value="activo">Activo</option>
            <option value="inactivo">Inactivo</option>
          </select>
        </div>
        <div className={`form-group ${this.errorClass(this.state.formErrors.fromEmail)}`}>
          <label htmlFor="fromEmail">from:</label>
          <input type="email" required className="form-control" name="fromEmail"
            placeholder="Email"
            value={this.state.fromEmail}
            onChange={this.validateInput}  />
        </div>
        <div className={`form-group ${this.errorClass(this.state.formErrors.bccEmail)}`}>
          <label htmlFor="bccEmail">bcc:</label>
          <input type="email" required className="form-control" name="bccEmail"
            placeholder="Email"
            value={this.state.bccEmail}
            onChange={this.validateInput}  />
        </div>
        <div className={`form-group ${this.errorClass(this.state.formErrors.country)}`}>
          <select name="country" value={this.state.country} onChange={this.validateInput}>
            <option value="">País</option>
            <option value="mexico">México</option>
            <option value="spain">España</option>
          </select>
        </div>
        <div className={`form-group ${this.errorClass(this.state.formErrors.languageField)}`}>
          <select name="languageField" value={this.state.languageField} onChange={this.validateInput}>
            <option value="">Lenguaje</option>
            <option value="spanish">Español</option>
            <option value="english">Inglés</option>
          </select>
        </div>
        <div className={`form-group ${this.errorClass(this.state.formErrors.freeText)}`}>
          <label htmlFor="freeText">Text content: </label>
          <textarea required className="form-control" name="freeText"
            placeholder="Add some text"
            value={this.state.freeText}
            onChange={this.validateInput}  />
        </div>
        <button type="submit" className="btn btn-primary" onClick={this.handleNewRoute}>Guardar</button>
      </form>
    )
  }
}

export default Form;
