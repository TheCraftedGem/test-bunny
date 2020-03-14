import React, { Component } from 'react'

class NewIdeaForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      description: ''
    }
  }

  handleChange = (e) => {
    const {name, value} = e.target
    this.setState({[name]: value})
  }

  // render() {
  //   return (
  //     <form>
  //       <input name="name" value={this.state.name} onChange={this.handleNameChange}  />
  //       <input name="description" value={this.state.description} />
  //       <button>Submit</button>
  //     </form>
  //   )
  // }

  render() {
    return (
      <form>
        <input
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <input
          name="description"
          value={this.state.description}
          onChange={this.handleChange}
        />
        <button>Submit</button>
      </form>
    )
  }
}

export default NewIdeaForm;