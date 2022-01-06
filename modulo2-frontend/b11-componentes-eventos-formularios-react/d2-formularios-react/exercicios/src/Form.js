import React from 'react';

class Form extends React.Component {
  constructor() {
    super()
    this.state = {
      name: '',
      email: '',
      favoriteFruit: 'laranja',
      description: '',
      alergia: false,
    }

    this.handleRefreshForm = this.handleRefreshForm.bind(this)
  }

  handleRefreshForm( {target} ) {
    const { name } = target
    const value = target.type === 'checkbox' ? target.checked : target.value
    this.setState( {[name]: value} )
  }

  render() {
    return (
      <main>
        <form>

          <label>
            Digite seu nome: 
            <input 
              type='text' 
              name='name'
              value={this.state.nome}
              onChange={this.handleRefreshForm}
            />
          </label>

          <label>
            Digite seu email:
            <input 
              type='text'
              name='email'
              value={this.state.email}
              onChange={this.handleRefreshForm}
            />
          </label>

          <label> Escolha sua fruta favorita:
            <select
              name='favoriteFruit'
              value={this.state.favoriteFruit}
              onChange={this.handleRefreshForm}>
              <option value="laranja">Laranja</option>
              <option value="limao">Limão</option>
              <option value="coco">Coco</option>
              <option value="manga">Manga</option>
            </select>
          </label>

          <label>
            Fale um pouco sobre você:
            <textarea
              name='description'
              value={this.state.description}
              onChange={this.handleRefreshForm}
            />
          </label>

          <fieldset>
            <label>É alergico a alguma coisa?
              <input
                type='checkbox'
                name='alergia'
                value={this.state.alergia}
                onChange={this.handleRefreshForm}
              />
            </label>
          </fieldset>

          <input type="file" />


        </form>
      </main>
    )
  }
}

export default Form