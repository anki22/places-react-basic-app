  import React, { Component } from 'react';
  import './App.scss';
  
  import Sidebar from './components/sidebar'
  import Content from './components/content'



  class App extends Component {
    render() {
      return (
        <div className="page-wrapper"  role="main">
          <Sidebar></Sidebar>
          <Content></Content>

      </div>
    );
  }
}

export default App;
