let button = document.querySelector("#searchButton")
let button2 = document.querySelector("#searchButton2")

button.addEventListener('click', async () => {
    //variables 
    let pokemonName = document.querySelector("#pokemonName")
    let pokemonImage = document.querySelector("#pokemonImage")
    let textInput = document.querySelector("#inputBar").value
   
    //Checking to ensure user input is logged. 
    console.log(textInput)
    
    //API Call

    const pokeName = await axios.get(`https://api.pokemontcg.io/v2/cards/${textInput}`)
    console.log(pokeName.data.data.name)

    //Random Assingment of Cards
   
    
    //Display based on user input
    pokemonName.innerText = pokeName.data.data.name
    pokemonImage.src = pokeName.data.data.images.small

}
)

button2.addEventListener('click', async () => {
    //variables 
    let pokemonName2= document.querySelector("#pokemonName2") 
    let pokemonImage2 = document.querySelector("#pokemonImage2")
    let textInput2 = document.querySelector("#inputBar2").value
    let textInput = document.querySelector("#inputBar").value
    //Checking to ensure user input is logged. 
    console.log(textInput)


const pokeName2 = await axios.get(`https://api.pokemontcg.io/v2/cards/${textInput2}`)
console.log(pokeName2)

    pokemonName2.innerText = pokeName2.data.data.name
    pokemonImage2.src = pokeName2.data.data.images.small

}
)