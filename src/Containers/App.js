import React, { Component } from 'react';
import './App.css';
import CardList from '../Components/CardList'
import SearchBox from '../Components/SearchBox'
import Scroll from '../Components/Scroll'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      robots: [],
      searchTerm: '',
      isPending: true,
      robotype: 'set1'
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        this.setState({
          robots: data,
          isPending: false
        })
      })
  }

  // this.onSearchChange = this.onSearchChange.bind(this)
  // ^^^ auto bound with cool arrow function below:
  onSearchChange = (evt) => {
    this.setState({ searchTerm: evt.target.value })
  }

  render() {
    const { searchTerm, robots, isPending } = this.state
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchTerm)
    })

    return (
      <div className='tc'>
        <h1>RoboDex</h1>
        <SearchBox onSearchChange={this.onSearchChange}/>
        <Scroll>
          {isPending? <h2>Loading...</h2> : <CardList robots={filteredRobots} robotype={this.state.robotype} />}
        </Scroll>
      </div>
    )
  }
}

export default App;
