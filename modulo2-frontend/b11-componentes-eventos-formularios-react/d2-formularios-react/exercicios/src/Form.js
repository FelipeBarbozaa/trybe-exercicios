import React from 'react';
import Nome from './Nome';
import Email from './Email'
import FrutaFavorita from './FrutaFavorita'
import Description from './Description';
import Alergia from './Alergia';

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
          <Nome value={this.state.name} handleRefreshForm={this.handleRefreshForm}/>
          <Email value={this.state.email} handleRefreshForm={this.handleRefreshForm}/>
          <FrutaFavorita value={this.state.favoriteFruit} handleRefreshForm={this.handleRefreshForm}/>
          <Description value={this.state.description} handleRefreshForm={this.handleRefreshForm}/>
          <Alergia value={this.state.alergia} handleRefreshForm={this.handleRefreshForm}/>
          <input type="file" />
        </form>
      </main>
    )
  }
}

export default Form