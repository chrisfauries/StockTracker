import React, { Component } from 'react';
import styles from './sass/App.module.scss'
import Cards from './components/Cards.js'

class App extends Component {
  render() {
    return (
      <div className={ styles.app }>
        <Cards></Cards>
      </div>
    );
  }
}

export default App;
