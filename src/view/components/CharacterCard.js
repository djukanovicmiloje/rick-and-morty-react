import React from 'react';
import addCharacterToFavorites from '../../services/addCharacterToFavorites';
import { Link } from "react-router-dom";
import './CharacterCard.css'

const CharacterCard = function ({ character, layoutIsGrid }){
    
    let characterCardClass;
    if(layoutIsGrid){
        characterCardClass = 'characterCard characterCardGrid'
    } else {
        characterCardClass = 'characterCard characterCardList'
    }
    return <div className={characterCardClass}>
    <Link to={`/character/${character.id}`}>
    
        <img src={character.image}></img> </Link>
        <h3>{character.name}</h3>
        <button onClick={() => addCharacterToFavorites(character.id)}>Add to Favorites</button>
    
   </div>
}

export default CharacterCard;