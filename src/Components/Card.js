import React, { Component } from 'react'


class Card extends Component {
  constructor(props) {
    super(props)
    this.state = {
      typeOrobot: this.props.robotype
    }
  }

  handleTypeChange = () => {
    // return set1, set2 or set3
    let numType = this.state.typeOrobot.slice(-1)
    numType = (numType >= 3) ? 1 : ++numType
    this.setState({ typeOrobot: `set${numType}` })
  }

  render () {
    const {id, name, email} = this.props

    return (
      <div id={id} onClick={this.handleTypeChange}
        className="bg-light-green dib pa3 ma2 tc br3 grow">
        <img
          role="presentation" src={`//robohash.org/${id}?size=200x200&set=${this.state.typeOrobot}`}
        />
        <h2>{name}</h2>
        <p>{email || 'no email'}</p>
      </div>
    )
  }
}


Card.propTypes = {
  name: React.PropTypes.string.isRequired,
  id: React.PropTypes.number.isRequired,
  robotype: React.PropTypes.string,
  email: React.PropTypes.string,
}

export default Card
