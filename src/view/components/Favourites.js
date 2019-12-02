import React from 'react';
import LoadingScreen from './LoadingScreen';
import fetchFavouriteCharacters from '../../services/fetchFavouriteCharacters'
import CharacterCard from './CharacterCard';
class Favourites extends React.Component{
    constructor(){
        super();
        this.state = {
            loading: true
        }
    }
    render(){
        if(this.state.loading){
            return <LoadingScreen/>
        } else {
            return this.state.characters.map( (character, key) => <CharacterCard key={key} character={character}/>)
        }
    }
    async getCharacters(){
        const characters = await fetchFavouriteCharacters();
        this.setState({
            loading: false,
            characters
        })
    }
    componentDidMount(){
        this.getCharacters();
    }
}
export default Favourites;