import React, { Component } from 'react';
import './App.css';
import CardList from './CardList'
import SearchBox from './SearchBox'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      robots: [],
      searchTerm: ''
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

  // this.onSearchChange = this.onSearchChange.bind(this)
  // ^^^ auto bound with cool arrow function below:
  onSearchChange = (evt) => {
    this.setState({ searchTerm: evt.target.value })
  }

  render() {
    const { searchTerm, robots } = this.state
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchTerm)
    })

    return (
      <div className='tc'>
        <h1>RoboDex</h1>
        <SearchBox onSearchChange={this.onSearchChange}/>
        <CardList robots={filteredRobots} />
      </div>
    )
  }
}

export default App;
