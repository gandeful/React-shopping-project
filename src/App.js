import React, { Component } from 'react';
import logo from './logo.svg';
import styles from './App.css';

class App extends Component {
  render() {
    
    return (
      <div className={styles.App}>
        <header className={styles.Appheader}>
          <img src={logo} className={styles.Applogo} alt="logo" />
          <h1 className={styles.Apptitle}>Welcome to React,</h1>
        </header>
        <p className={styles.Appintro}>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
