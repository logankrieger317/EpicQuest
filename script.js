//automatic resizing of background image on screen load

const w = window.innerWidth;
const h= window.innerHeight;
const w2 = w/2;
const h2 = h/2;

let PlayerScreenSize = `${w}px ${h}px`
console.log(PlayerScreenSize)

function playerScreenResize() {
    document.getElementById("body").style.backgroundSize=`${w}px ${h}px`;
    
    }
window.onload = playerScreenResize()

function introModalResize(){
    document.getElementById("myModal").style.backgroundSize=`${w}px ${h}px`;
} 
introModalResize()

function attackResize(){
    document.getElementById("attackModal").style.backgroundSize=`${w}px ${h}px`;
}
attackButton.onclick = attackResize()

//Beginning of Game Logic
let button = document.querySelector("#startButton")

button.addEventListener('click', async () => {
    //Player Variables
    let pokemonName = document.querySelector("#pokemonName")
    let pokemonImage = document.querySelector("#pokemonImage")
    let attackButton = document.querySelector("#attackButton")
    let playerScore = document.querySelector("#playerScore")
    playerScore=0
    //Computer Variables
    let comPokemonName= document.querySelector("#comPokemonName") 
    let comPokemonImage = document.querySelector("#comPokemonImage")
    let computerScore = document.querySelector("#computerScore")
       
    //Random Assingment of Cards
    let number1 = Math.floor(Math.random() * 2 * 100)
    let number2 = Math.floor(Math.random() * 50)
    let computerNum1 = Math.floor(Math.random() * 2* 100)
    let testPairs = [179 , 65, 127, 55 , 77 , 69 , 80 , 138 , 83, 191, 5 , 186, 6,157,0,146]
    let testPairs2 = [65, 127, 55 , 77 , 69 , 80 , 138 , 83, 191, 5 , 186, 6,157,0,146,179]
    
    let computerNm2 = Math.floor(Math.random()*10)
    console.log(computerNm2)

    console.log(number1)
    console.log(computerNum1)

    //Player Cards &API Call
    const randomCard1 =  await axios.get(`https://api.pokemontcg.io/v2/cards`)
    allPlayerCards = randomCard1.data.data
    backupCard = allPlayerCards[number2].name
    backupCardImage = allPlayerCards[number2].images.small
    console.log(backupCard)
    console.log(backupCardImage)

    pokemonName.innerText = allPlayerCards[testPairs[1]].name
    pokemonImage.src = allPlayerCards[testPairs[1]].images.small

    if (allPlayerCards[testPairs[1]].name === undefined){
        pokemonName.innerText = backupCard
        pokemonImage.src = backupCardImage}
    
   //Computer Cards & API Call
    const computerCard1 = await axios.get(`https://api.pokemontcg.io/v2/cards`)
    allComputerCards =computerCard1.data.data

    comPokemonName.innerText = allComputerCards[testPairs2[2]].name
    comPokemonImage.src = allComputerCards[testPairs2[2]].images.small
    document.getElementById("comPokemonImage").style.size

    //Attack Button
    let attack1 =  allPlayerCards[testPairs[2]].attacks[0].name
    console.log(attack1)
    

    attackButton.innerText = attack1
    
    attackButton.addEventListener('click', () => {
        console.log("Start Attacks")
        let playerAttack1 =  allPlayerCards[testPairs[2]].attacks[0].damage
        let playerAttack = playerAttack1.replace(/[^a-zA-Z0-9 ]/g, '')
        console.log(playerAttack) 
        let computerAttack = allComputerCards[testPairs2[2]].attacks[0].damage
        computerAttack = computerAttack.replace(/[^a-zA-Z0-9 ]/g, '')
        console.log(computerAttack)
        let computerHp = allComputerCards[testPairs2[2]].hp
        let playerHp = allPlayerCards[testPairs[2]].hp

        // Battle Loop
        while (playerHp > computerHp && computerHp > 0){

            computerHp = computerHp - playerAttack
            localStorage.setItem(computerHp, computerHp)
            localStorage.getItem(computerHp)
            console.log(`Computer HP 1st Attack ${computerHp}`)
            playerHp = playerHp - computerAttack
            localStorage.setItem(playerHp, playerHp)
            localStorage.getItem(playerHp)
            console.log(`Player HP 1st attack ${playerHp}`)

        if (playerAttack > computerHp && playerHp >= computerHp  || playerHp === computerHp && playerAttack > computerHp)    {
            console.log(`Computer HP at If Statement:${computerHp} Player HP at If Statement ${playerHp} `)
            console.log("Player Wins")
            alert("Player Wins")
            location.reload()
       
        } else (playerHp < computerHp && playerHp <= 0);{
             alert("Computer Wins")
            console.log(`Computer HP at Else Statement ${computerHp} Player HP at Else Statement ${playerHp}`)
                location.reload()
    }
    }
})
    })
       
//Modal Logic
// Get the modal
let modal = document.getElementById("myModal");


// Get the button that opens the modal
let btn = document.getElementById("#startButton");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
window.onload = function() {
  modal.style.display = "block";
}
//open the attacks once computer card loads
comPokemonImage.onload = function () {
  attackModal.style.display="block"
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
startButton.onclick = function() {
  modal.style.display = "none";
}
attackButton.onclick = function(){
  attackModal.style.display= "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
//launch modal after attacks
attackModal.onload = function() {
    attackModal.style.display = "block";
    }