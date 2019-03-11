import React, { Component } from 'react'
import styles from '../sass/Card.module.scss'

class Card extends Component {

  render() {
    return (
      <div className={ styles.card }>
        This is working and connected
      </div>
    )
  }
}

export default Card
