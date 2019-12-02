import React from 'react';
import LoadingScreen from './LoadingScreen';
import fetchCharacter from '../../services/fetchCharacter';
import Character from '../../entities/Character';

class CharacterScreen extends React.Component{
    constructor(props){
        super();
        this.state = {
            loading: true
        }
        this.id = props.match.params.id;
    }
    render(){
        if(this.state.loading){
            return <LoadingScreen/>;
        } else {
            return <div>
            <img src={this.state.character.image}></img>
            <h3>{this.state.character.name}</h3>
            </div>  
        }
    }
    async getCharacter(){
        const character = await fetchCharacter(this.id);
        this.setState({
            loading: false,
            character
        })
    }
    componentDidMount(){
        this.getCharacter();
    }
}

export default CharacterScreen;