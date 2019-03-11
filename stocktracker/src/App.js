import React, { Component } from 'react';
import styles from './sass/App.module.scss'
import Card from './components/Card.js'

class App extends Component {
  render() {
    return (
      <div className={ styles.app }>
        <Card></Card>
      </div>
    );
  }
}

export default App;
