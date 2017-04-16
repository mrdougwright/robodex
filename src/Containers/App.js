import React, { Component } from 'react';
import { connect } from 'react-redux'
import { setSearchTerm } from '../actions'
import './App.css';
import CardList from '../Components/CardList'
import SearchBox from '../Components/SearchBox'
import Scroll from '../Components/Scroll'


const mapStateToProps = state => {
  return {
    searchTerm: state.searchTerm
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSearchChange: event => dispatch(setSearchTerm(event.target.value))
  }
}


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      robots: [],
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


  render() {
    const { robots, isPending } = this.state
    const { onSearchChange, searchTerm } = this.props
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchTerm.toLowerCase())
    })

    return (
      <div className='tc'>
        <h1>RoboDex</h1>
        <SearchBox onSearchChange={onSearchChange}/>
        <Scroll>
          {isPending? <h2>Loading...</h2> : <CardList robots={filteredRobots} robotype={this.state.robotype} />}
        </Scroll>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
