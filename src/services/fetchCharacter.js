async function fetchCharacter(id){
    const url = `https://rickandmortyapi.com/api/character/${id}`;
    const response = await fetch(url);
    const character = await response.json();

    return character;
}

export default fetchCharacter;