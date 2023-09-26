let button = document.querySelector("#startButton")


button.addEventListener('click', async () => {
   let allPlayerCards=  ""
   let allComputerCards = []
   
    //Card Array
  


    //Player Variables
    let pokemonName = document.querySelector("#pokemonName")
    let pokemonImage = document.querySelector("#pokemonImage")
    let attackButton = document.querySelector("#attackButton")
    //Computer Variables
    let comPokemonName= document.querySelector("#comPokemonName") 
    let comPokemonImage = document.querySelector("#comPokemonImage")
   
    
    //API Call
    const randomCard1 =  await axios.get(`https://api.pokemontcg.io/v2/cards`)
    allPlayerCards = randomCard1.data.data
    console.log(allPlayerCards)
   
    
   
    //Random Assingment of Cards

    let number1 = Math.floor(Math.random() * 250)
    let number2 = Math.floor(Math.random() * 250)
    let computerNum1 = Math.floor(Math.random() * 250)
    let computerNum2 = Math.floor(Math.random() * 250)

    console.log(number1)
    console.log(number2)

//     //Player Cards
    pokemonName.innerText = allPlayerCards[number1].name
    pokemonImage.src = allPlayerCards[number1].images.small
   
    console.log(number1)
    
    
    let attack1 =  allPlayerCards[number1].attacks[0].name
    console.log(attack1)
    

    attackButton.innerText = attack1
    
    attackButton.addEventListener('click', () => {

    })
  



//     //Computer Cards
    const computerCard1 = await axios.get(`https://api.pokemontcg.io/v2/cards`)
    allComputerCards =computerCard1.data.data
    comPokemonName.innerText = allComputerCards[computerNum1].name
    comPokemonImage.src = allComputerCards[computerNum1].images.small

}
)
