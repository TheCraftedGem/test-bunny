import React, {Component} from 'react'
import NewIdeaForm from './NewIdeaForm';


class App extends Component {
  constructor() {
    super();
    this.state = {
      ideas: []
    };
  }
  render() {
    return (
      <div>
        <NewIdeaForm />
      </div>
    );
  }
}
export default App;
