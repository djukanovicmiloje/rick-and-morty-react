import React from 'react';
import { Link } from "react-router-dom";
import './Header.css'

class Header extends React.Component{
    constructor({ changePage, changeLayout }){
        super();
        this.changePage = changePage;
        this.changeLayout = changeLayout;
    }
    render(){
        return <header id="mainHeader">
            <h1>Rick and Morty Wiki</h1>
            <div id="pageBtns">
            <button onClick={() => this.changeLayout(false)}><i class="fas fa-list-ul"></i></button>
            <button onClick={() => this.changeLayout(true)}><i class="fas fa-th"></i></button>
            <button onClick={() => this.changePage(parseInt(Math.random() * 25))}><i class="fas fa-random"></i></button>
            </div>
            <div>
            <Link to='/about'><button>About</button></Link>
            <Link to="/favourites"><button>Favourite Characters</button></Link>
            </div>
        </header>
    }
}

export default Header;