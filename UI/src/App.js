import React, { Component } from 'react';
import MainHeader from './Components/header.js';
import MainView from './Views/main_view';
import ViewsView from './Views/ViewsView';
import ComponentsView from './Views/ComponentsView';
import { Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (

      <div className="App">
          <MainHeader/>
          <Route path='/' exact component={MainView} />
          <Route path='/views' exact component={ViewsView} />
          <Route path='/components' exact component={ComponentsView} />
      </div>

    );
  }
}

export default App;
