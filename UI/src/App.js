import React, { Component } from 'react';
import MainHeader from './Components/header.js';
import MainView from './Views/main_view';
import ComponentsView from './Views/ComponentsView';
import ViewsView from './Views/ViewsView';
import { Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (

      <div className="App">
          <MainHeader/>
          <Route path='/' exact component={MainView} />
          <Route path='/components'exact component={ComponentsView} />
          <Route path='/views' exact component={ViewsView} />
      </div>

    );
  }
}

export default App;
