import React from 'react';

class Description extends React.Component {
  render() {
    const { value, handleRefreshForm } = this.props;

    return(
      <label>
        Fale um pouco sobre você:
        <textarea
          name='description'
          value={value}
          onChange={handleRefreshForm}
        />
      </label>
    )
  }
}

export default Description