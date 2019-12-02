import React, { Component } from 'react';
import Content from './Content'
import PageNavigation from './PageNavigation';
class Characters extends Component {
  constructor({ page, layoutIsGrid }){
    super();
      this.state = {
        page,
        layoutIsGrid      
    }    
  }
  changePage(page){
    this.setState({
        page ,
        layoutIsGrid: this.setState.layoutIsGrid
    });  
  }
  componentWillReceiveProps({ page, layoutIsGrid }){
      this.setState({page, layoutIsGrid})
  }
  render() {   
    return (
      <div>
      <PageNavigation page={this.state.page} changePage={(page) => this.changePage(page)}/>
      <Content page={this.state.page} layoutIsGrid={this.state.layoutIsGrid}/>
      </div>
    );
  }
}

export default Characters;
