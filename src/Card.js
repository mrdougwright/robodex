import React from 'react'


const Card = ({id, name, email}) => (
  <div id={id}
    className="bg-light-green dib pa3 ma2 tc br3 grow">
    <img
      role="presentation" src={`//robohash.org/${id}?size=200x200`}
    />
    <h2>{name}</h2>
    <p>{email || 'no email'}</p>
  </div>
)


Card.propTypes = {
  id: React.PropTypes.number.isRequired,
  name: React.PropTypes.string.isRequired,
  email: React.PropTypes.string,
}

export default Card
