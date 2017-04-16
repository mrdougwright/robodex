import React from 'react'
import Card from './Card'


const CardList = ({robots, robotype}) => (
  <div>
    {
      robots.map(robot => (
        <Card
          id={robot.id}
          key={robot.id}
          name={robot.name}
          email={robot.email}
          robotype={robotype}
        />
      ))
    }
  </div>
)

CardList.propType = {
  robots: React.PropTypes.array.isRequired,
}


export default CardList
