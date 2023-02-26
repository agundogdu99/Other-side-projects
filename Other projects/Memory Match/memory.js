const pokeAPIBaseUrl = "https://pokeapi.co/api/v2/pokemon/"
const game = document.getElementById('game');
let isPaused = false
let firstPick;
let matches;

const loadPokemon = async () => {
    const randomIds = new Set()
    while(randomIds.size < 8) {
        const randomNumber = Math.ceil(Math.random() * 150)
        randomIds.add(randomNumber)
    }

    let pokemonSet = [...randomIds]

    let pokePromises = pokemonSet.map(id => fetch(pokeAPIBaseUrl + id))
    const responses = await Promise.all(pokePromises)
    return await Promise.all(responses.map(result => result.json()))

    // Doing it like this means that the data is fetched one at a time. Not very efficient
    // for (let i = 0; i < pokemonSet.length; i++) {

    //     const result = await fetch(pokeAPIBaseUrl + pokemonSet[i])
    //     const apiData = await result.json()
    //     console.log(apiData)
    // }
}

const displayPokemon = (pokemon) => {
    pokemon.sort(_ => Math.random() - 0.5)
    const pokemonHTML = pokemon.map(pokemon => {
        return `<div class="card" onclick="clickCard(event)" data-pokename="${pokemon.name}">
        <div class="front ">
        </div>
        <div class="back rotated">
        <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}"  />
        <h2>${pokemon.name}</h2>
        </div>
    </div>
        `
    }).join('')
    game.innerHTML = pokemonHTML
}

//pokemon.sprites.other.dream_world.front_default

const clickCard = (event) => {
    const pokemonCard = event.currentTarget
    console.log(pokemonCard)
    const [front, back] = getFrontAndBackFromCard(pokemonCard)

    if (front.classList.contains('rotated') || isPaused) {
        return
    }

    isPaused = true
    rotateElements([front, back])

    if (!firstPick) {
        firstPick = pokemonCard
        isPaused = false
    } else {
        const secondPokemonName = pokemonCard.dataset.pokename
        const firstPokemonName = firstPick.dataset.pokename
        if (firstPokemonName !== secondPokemonName) {
            const [firstFront, firstBack] = getFrontAndBackFromCard(firstPick)

            setTimeout(() => {
                rotateElements([front, back, firstFront, firstBack])
                firstPick = null
                isPaused = false
            }, 500)
        } else {
            matches ++;
            if (matches === 8) {
                console.log('winner')
            }
            firstPick = null
            isPaused = false
        }
    }


}

function getFrontAndBackFromCard(card) {
    const front = card.querySelector(".front");
    const back = card.querySelector(".back");
    return [front, back];
}

function rotateElements(elements) {
    if (typeof elements != 'object' || !elements.length) {
        return;
    }
    elements.forEach(element => element.classList.toggle('rotated'));
}


const resetGame = async () => {
    game.innerHTML = ''
    isPaused = 'true'
    firstPick = null
    matches = 0
    setTimeout( async () => {
        const pokemon = await loadPokemon();
        displayPokemon([...pokemon, ...pokemon])
        isPaused = false;
    }, 200)
}   

resetGame()