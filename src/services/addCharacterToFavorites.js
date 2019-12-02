function addCharacterToFavotites(id){
    let favorites = JSON.parse(localStorage.getItem('favourite-characters'));
    if(!favorites){
        favorites = [];
    }
    favorites.push(id);
    localStorage.setItem('favourite-characters', JSON.stringify(favorites));
    console.log('ide', id)
}
export default addCharacterToFavotites;