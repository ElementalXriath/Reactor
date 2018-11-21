import React, { Component } from 'react';
import MainHeader from './Components/header.js';
import MainView from './Views/main_view';
import { Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (

      <div className="App">
          <MainHeader/>
          <Route path='/' exact component={MainView} />
      </div>

    );
  }
}

export default App;
