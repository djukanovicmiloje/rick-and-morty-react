import React, { Component } from 'react';
import CharactersContainer from './components/CharactersContainer'
import About from './components/About'
import { Switch, Route } from "react-router-dom"
import CharacterScreen from './components/CharacterScreen';
import Favourites from './components/Favourites';

class App extends Component {
  constructor(){
    super();   
  }
  render() {   
    return <Switch>
      <Route exact path="/about" component={About}/>
      <Route exact path="/" component={CharactersContainer}/>
      <Route path="/character/:id" component={CharacterScreen}/>
      <Route exact path="/favourites" component={Favourites}/>
    </Switch>
  }
}

export default App;
