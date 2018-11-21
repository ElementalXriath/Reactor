import React, { Component } from 'react';
import MainHeader from './Components/header.js';
import MainView from './Views/main_view';


class App extends Component {
  render() {
    return (

      <div className="App">
          <MainHeader/>
         
          <MainView/>
      </div>

    );
  }
}

export default App;
