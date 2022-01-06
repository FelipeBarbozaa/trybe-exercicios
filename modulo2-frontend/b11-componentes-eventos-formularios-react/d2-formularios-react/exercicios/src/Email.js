import React from 'react';

class Email extends React.Component {
  render() {
    const { value, handleRefreshForm } = this.props
    return (
      <label>
            Digite seu email:
            <input 
              type='text'
              name='email'
              value={value}
              onChange={handleRefreshForm}
            />
          </label>
    )
  }
}

export default Email