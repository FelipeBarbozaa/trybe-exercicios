import React from 'react';

class FrutaFavorita extends React.Component {
  render() {
    const { value, handleRefreshForm} = this.props
    return (
      <label> Escolha sua fruta favorita:
            <select
              name='favoriteFruit'
              value={value}
              onChange={handleRefreshForm}
              >
              <option value="laranja">Laranja</option>
              <option value="limao">Limão</option>
              <option value="coco">Coco</option>
              <option value="manga">Manga</option>
            </select>
          </label>
    )
  }
}

export default FrutaFavorita