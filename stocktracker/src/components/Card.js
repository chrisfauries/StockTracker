import React, { Component } from 'react'
import styles from '../sass/Card.module.scss'

class Card extends Component {

  render() {
    return (
      <div className={ styles.card }>
        <p>This is working and connected</p>
        <span>This is working and connected</span>
      </div>
    )
  }
}

export default Card
