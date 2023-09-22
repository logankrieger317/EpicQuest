let button = document.querySelector("#startButton")


button.addEventListener('click', async () => {
    //Player Variables
    let pokemonName = document.querySelector("#pokemonName")
    let pokemonImage = document.querySelector("#pokemonImage")
    let pokeMove1 = document.querySelector("#move1")
    let pokeMove2 = document.querySelector("#move2")
    //Computer Variables
    let comPokemonName= document.querySelector("#comPokemonName") 
    let comPokemonImage = document.querySelector("#comPokemonImage")
   
    
    //API Call
    const randomCard1 =  await axios.get(`https://api.pokemontcg.io/v2/cards`)
    console.log(randomCard1.data.data)
   
    //Random Assingment of Cards

   let number = Math.floor(Math.random() * 250)
//    let number2 = Math.floor(Math.random() * 99)
   let number3 = Math.floor(Math.random() * 250)
//    let number4 = Math.floor(Math.random() * 99)

    console.log(number)
    // console.log(number2)

    //Player Cards
    pokemonName.innerText = randomCard1.data.data[number].name
    pokemonImage.src = randomCard1.data.data[number].images.small
    console.log(number,)
    
    
    pokeMove1.innerHTML = randomCard1.data.data[number].attacks[0].name
    console.log(number)
    console.log(pokeMove1)

    // pokeMove2.innerHTML= randomCard1.data.data[number].attacks[1].name
    // console.log(number,)
    // console.log(pokeMove2)

   
   //Computer Cards
    const computerCard1 = await axios.get(`https://api.pokemontcg.io/v2/cards`)
    console.log(computerCard1.data.data)
    comPokemonName.innerText = computerCard1.data.data[number3].name
    comPokemonImage.src = computerCard1.data.data[number3].images.small

}
)