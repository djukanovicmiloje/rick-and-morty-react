import fetchCharacter from "./fetchCharacter";


async function fetchFavouriteCharacters(){
    const favouriteIds = JSON.parse(localStorage.getItem('favourite-characters'));
    
    // const favouriteCharacters = favouriteIds.map( async (id) => await fetchCharacter(id) );
    
    // console.log(favouriteCharacters)
    // return  favouriteCharacters;

    const favouriteCharacters = [];
    for(let i = 0; i < favouriteIds.length; i++){
        const character = await fetchCharacter(favouriteIds[i]);
        favouriteCharacters.push(character);
    }
    return favouriteCharacters;
}
export default fetchFavouriteCharacters;