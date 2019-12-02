import Character from "../entities/Character";

async function fetchCharacterPage(page){
    const url = `https://rickandmortyapi.com/api/character/?page=${page}`;
    const response = await fetch(url);
    const characterData = await response.json();
    const characterList = characterData.results;

    const characters = [];
    characterList.map((character) => {
        const id = character.id;
        const name = character.name;
        const image = character.image;

        characters.push(new Character(id, name, image));
    });

    return characters;
}

export default fetchCharacterPage;