import React from 'react';
import CharacterCard from './CharacterCard';
import fetchCharacterPage from '../../services/fetchCaracterPage';
import LoadingScreen from './LoadingScreen';
import './Content.css'

class Content extends React.Component{
    constructor({ page, layoutIsGrid }){
        super();
        this.state = {
            loading: true,
            page,
            layoutIsGrid
        };        
    }
    componentWillReceiveProps({ page, layoutIsGrid }){
        this.setState({
            loading: true,
            page,
            layoutIsGrid
        });
        this.getCharacters();
    }
    render(){
        if(this.state.loading){
            return <LoadingScreen/>
        } else {
            return <div id="content">
                {this.state.characters.map( (character, key) => <CharacterCard key={key} character={character} layoutIsGrid={this.state.layoutIsGrid}/>)}
            </div>
        }
    }
    async getCharacters(){
        const characters = await fetchCharacterPage(this.state.page);
        this.setState({
            loading: false,
            page: this.state.page,
            layoutIsGrid: this.state.layoutIsGrid,
            characters: characters
         })
    }
    componentDidMount(){
        this.getCharacters();
    }
}
export default Content;