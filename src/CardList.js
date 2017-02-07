import React from 'react'
import Card from './Card'


const CardList = ({robots}) => (
  <div>
    {
      robots.map(robot => (
        <Card
          id={robot.id}
          key={robot.id}
          name={robot.name}
          email={robot.email}
        />
      ))
    }
  </div>
)

CardList.propType = {
  robots: React.PropTypes.array.isRequired,
}


export default CardList
