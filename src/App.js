import React, { Component } from 'react';
import logo from './logo.svg';
import styles from './App.less';
import { NavBar, Icon } from 'antd-mobile';

class FJH extends Component{
  render(){
    return(
      <div className={styles.title}>
      <div>back</div>
      <div>title</div>
      <div>right</div>
      </div>
    )
  }
}
class App extends Component {
  render() {
    
    return (
      
      <div className={styles.App}>
      <FJH />
      <NavBar
      mode="dark"
      leftContent="Back"
      rightContent={[
        <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
        <Icon key="1" type="ellipsis" />,
      ]}
    >NavBar</NavBar>
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
