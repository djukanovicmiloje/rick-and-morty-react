import React, { Component } from 'react';
import Characters from './Characters'
import Header from './Header'

class CharactersContainer extends Component {
  constructor(){
    super();
    this.state = {
      page: 1,
      layoutIsGrid: false
    }
  }
  changePage(page){
    this.setState({
      page,
      layoutIsGrid: this.state.layoutIsGrid
    })    
  }
  changeLayout(layoutIsGrid){
    this.setState({
      page: this.state.page,
      layoutIsGrid
    })    
  }

  render() {   
    return <div>
      <Header changePage={(page) => this.changePage(page)} changeLayout={(layoutIsGrid) => this.changeLayout(layoutIsGrid)}/>
      <Characters page={this.state.page} layoutIsGrid={this.state.layoutIsGrid} />
    </div>;
  }
}

export default CharactersContainer;
