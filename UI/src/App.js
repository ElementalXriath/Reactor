import React, { Component } from 'react';
// you can also import directly from a folder and it looks for index.js first
import MainHeader from './Components/Header/index';
// you do not need .js on the end, it will only look for a js file
// import MainHeader from './Components/header.js';
import MainView from './Views/Home/index';
import ViewsView from './Views/ViewsView/index';
import ComponentsView from './Views/ComponentsView/index';
import RegisterView from './Views/RegisterView';
import { Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (

      <div className="App">
          <MainHeader/>
          <Route path='/' exact component={MainView} />
          <Route path='/views' exact component={ViewsView} />
          <Route path='/components' exact component={ComponentsView} />
          <Route path='/register' exact component={RegisterView} />
      </div>
      
    );
  }
}

export default App;
