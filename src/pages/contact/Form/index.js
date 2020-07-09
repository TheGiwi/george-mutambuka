import React, { Component } from 'react'
import Group from './Group'
import { post } from 'axios'
import { extendParentClass, extendBaseClass } from '../../../utils/classes'

export class Form extends Component {
  state = {
    name: '',
    email: '',
    message: '',
  }

  setKeyAndValue = (key, value) =>
    this.setState((prevState) => {
      return { ...prevState, [key]: value }
    })

  fields = [
    {
      label: 'Name',
      type: 'name',
      id: 'name',
      placeholder: 'Tim Appleseed',
    },
    {
      label: 'Email',
      type: 'email',
      id: 'email',
      placeholder: 'tim.appleseed@example.com',
    },
    {
      label: 'Message',
      Component: 'textarea',
      id: 'message',
      placeholder: 'Describe your project here...',
    },
  ]

  baseClass = extendParentClass.bind(this)('form')

  extend = extendBaseClass.bind(this)

  renderField = (fieldData, index) => {
    const handleChange = (event) =>
      this.setKeyAndValue(fieldData.id, event.target.value)
    return (
      <Group
        {...fieldData}
        key={index}
        onChange={handleChange}
        className={this.extend('field')}
      />
    )
  }

  renderFields = () => this.fields.map(this.renderField)

  submitValues = () => {
    const url = process.env.GATSBY_API_URL
    return post(url, this.state)
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.submitValues()
    window.location.href = '/success'
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {this.renderFields()}
        <button className={this.extend('submit-btn')}>Send Message</button>
      </form>
    )
  }
}

export default Form
