import React from 'react';

class Nome extends React.Component {
  render() {
    const { value, handleRefreshForm, handleErrorForm } = this.props
    let error = undefined
    if (value.length > 120) {
      error = "Texto muito grande!"
    }
    
    return (
      <label>
            Digite seu nome: 
            <input 
              type='text' 
              name='name'
              value={ value }
              onChange={handleRefreshForm}
            />
            <p>{error !== undefined? error : ''}</p>
          </label>
    )
  }
}

export default Nome
