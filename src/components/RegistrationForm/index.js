// Write your JS code here
import {Component} from 'react'

import './index.css'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    showFirstNameError: false,
    showLastNameError: false,
    isFormSubmitted: false,
  }

  onClickSubmitAnotherResponse = () => {
    this.setState(prevState => ({
      isFormSubmitted: !prevState.isFormSubmitted,
      firstName: '',
      lastName: '',
    }))
  }

  onChangeLastName = event => {
    this.setState({lastName: event.target.value})
  }

  onChangeFirstName = event => {
    this.setState({firstName: event.target.value})
  }

  validateLastName = () => {
    const {lastName} = this.state

    return lastName !== ''
  }

  lastNameHandler = () => {
    const isValidLastName = this.validateLastName()

    this.setState({showLastNameError: !isValidLastName})
  }

  validateFirstName = () => {
    const {firstName} = this.state

    return firstName !== ''
  }

  firstNameHandler = () => {
    const isValidFirstName = this.validateFirstName()

    this.setState({showFirstNameError: !isValidFirstName})
  }

  submitForm = event => {
    event.preventDefault()
    const isValidFirstName = this.validateFirstName()
    const isValidLastName = this.validateLastName()

    if (isValidFirstName && isValidLastName) {
      this.setState({isFormSubmitted: true})
    } else {
      this.setState({
        showFirstNameError: !isValidFirstName,
        showLastNameError: !isValidLastName,
        isFormSubmitted: false,
      })
    }
  }

  renderSubmissionReport = () => (
    <>
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
        className="success-image"
      />
      <p>Submitted Successfully</p>
      <button
        type="button"
        className="button"
        onClick={this.onClickSubmitAnotherResponse}
      >
        Submit Another Response
      </button>
    </>
  )

  renderRegistrationForm = () => {
    const {
      firstName,
      lastName,
      showFirstNameError,
      showLastNameError,
    } = this.state
    return (
      <form className="registration-form" onSubmit={this.submitForm}>
        <div className="input-container">
          <label htmlFor="firstName" className="input-label">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            className="input-text"
            placeholder="First Name"
            value={firstName}
            onChange={this.onChangeFirstName}
            onBlur={this.firstNameHandler}
          />
          {showFirstNameError && <p className="error-message">Required</p>}
        </div>
        <div className="input-container">
          <label htmlFor="lastName" className="input-label">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            className="input-text"
            placeholder="Last Name"
            value={lastName}
            onChange={this.onChangeLastName}
            onBlur={this.lastNameHandler}
          />
          {showLastNameError && <p className="error-message">Required</p>}
        </div>
        <button type="submit" className="button">
          Submit
        </button>
      </form>
    )
  }

  render() {
    const {isFormSubmitted} = this.state
    return (
      <div className="bg-container">
        <h1 className="app-heading">Registration</h1>
        <div className="container">
          {isFormSubmitted
            ? this.renderSubmissionReport()
            : this.renderRegistrationForm()}
        </div>
      </div>
    )
  }
}

export default RegistrationForm
