import React from 'react';

class Nome extends React.Component {
  render() {
    const { value, handleRefreshForm } = this.props
    return (
      <label>
            Digite seu nome: 
            <input 
              type='text' 
              name='name'
              value={ value }
              onChange={handleRefreshForm}
            />
          </label>
    )
  }
}

export default Nome