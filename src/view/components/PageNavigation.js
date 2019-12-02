import React from 'react';
import './PageNavigation.css'
class PageNavigation extends React.Component{
    constructor({ page, changePage }){
        super();
        this.state = {
            page: page
        }
        this.changePage = changePage;
    }
    componentWillReceiveProps({ page }){
        this.setState({page : page})
    }
    render(){
        let navigationStart;
        if(this.state.page < 5){
            navigationStart = 1;
        } else if(this.state.page >20) {
            navigationStart = 20;
        } else {
            navigationStart = this.state.page - 2;
        }

        return <div id="nav">
            <div onClick={() => this.changePage(navigationStart + 1)}><i class="fas fa-arrow-left"></i></div>
            <div onClick={() => this.changePage(navigationStart)}>{navigationStart}</div>
            <div onClick={() => this.changePage(navigationStart + 1)}>{navigationStart + 1}</div>
            <div onClick={() => this.changePage(navigationStart + 2)}>{navigationStart + 2}</div>
            <div onClick={() => this.changePage(navigationStart + 3)}>{navigationStart + 3}</div>
            <div onClick={() => this.changePage(navigationStart + 4)}>{navigationStart + 4}</div>
            <div onClick={() => this.changePage(navigationStart + 3)}><i class="fas fa-arrow-right"></i></div>
        </div>
    }
}

export default PageNavigation;