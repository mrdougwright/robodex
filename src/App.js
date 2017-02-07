import React, { Component } from 'react';
import './App.css';
import CardList from './CardList'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      robots: []
    }

    setTimeout(() => {
      this.setState({
        robots: [
          {id: 1, name: 'John Doe', email: 'john.doe@gmail.com' },
          {id: 2, name: 'Jane Doe', email: 'jane.doe@gmail.com' },
          {id: 3, name: 'Doug Wright', email: 'doug@gmail.com' },
        ]
      })
    }, 2000)
  }

  render() {
    return <CardList robots={this.state.robots} />
  }
}

export default App;
