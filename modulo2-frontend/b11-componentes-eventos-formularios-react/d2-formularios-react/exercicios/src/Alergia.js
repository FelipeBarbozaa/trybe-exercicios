import React from 'react';

class Alergia extends React.Component {
  render() {
    const { value, handleRefreshForm } = this.props
    return (
      <fieldset>
            <label>É alergico a alguma coisa?
              <input
                type='checkbox'
                name='alergia'
                value={value}
                onChange={handleRefreshForm}
              />
            </label>
          </fieldset>
    )
  }
}

export default Alergia