import React from 'react';

class Email extends React.Component {
  render() {
    const { value, handleRefreshForm } = this.props

    let error = undefined
    if(value.length > 50) error = 'Email inválido'

    return (
      <label>
            Digite seu email:
            <input 
              type='text'
              name='email'
              value={value}
              onChange={handleRefreshForm}
            />
            <p>{error !== undefined? error: ''}</p>
          </label>
    )
  }
}

export default Email