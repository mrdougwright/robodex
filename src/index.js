import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import Card from './Card'
import './index.css'
import 'tachyons'


const robots = [
  {id: 1, name: 'John Doe', email: 'john.doe@gmail.com' },
  {id: 2, name: 'Jane Doe', email: 'jane.doe@gmail.com' },
  {id: 3, name: 'Doug Wright', email: 'doug@gmail.com' },
]

const robotCards = robots.map(robot => (
  <Card id={robot.id} name={robot.name} email={robot.email} />
))

ReactDOM.render(
  <div>
    { robotCards }
  </div>,
  document.getElementById('root')
)
