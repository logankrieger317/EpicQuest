//automatic resizing of background image on screen load

const w = window.innerWidth;
const h= window.innerHeight;
const w2 = w/2;
const h2 = h/2;


let PlayerScreenSize = `${w}px ${h}px`
console.log(PlayerScreenSize)

function playerScreenResize() {
    document.getElementById("body").style.backgroundSize=`${w}px ${h}px`;
    console.log(`${w}px ${h}px`)
    }
window.onload = playerScreenResize()

function attackResize(){
    document.getElementById("attackModal").style.backgroundSize=`${w}px ${h}px`;
    console.log(`${w}px ${h}px`)
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
    let computerNum2 = [179 , 65, 127, 55 , 77 , 69 , 80 , 138 , 83, 191, 5 , 186]
    
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

    
    pokemonName.innerText = allPlayerCards[number1].name
    pokemonImage.src = allPlayerCards[number1].images.small

    if (allPlayerCards[number1].name === undefined){
        pokemonName.innerText = backupCard
        pokemonImage.src = backupCardImage}

   
    
   //Computer Cards & API Call
    const computerCard1 = await axios.get(`https://api.pokemontcg.io/v2/cards`)
    allComputerCards =computerCard1.data.data

    comPokemonName.innerText = allComputerCards[computerNum1].name
    comPokemonImage.src = allComputerCards[computerNum1].images.small
    document.getElementById("comPokemonImage").style.size

    //Attack Button
    let attack1 =  allPlayerCards[number1].attacks[0].name
    console.log(attack1)
    

    attackButton.innerText = attack1
    
    attackButton.addEventListener('click', () => {
        console.log("Start Attacks")
        let playerAttack1 =  allPlayerCards[number1].attacks[0].damage
        let playerAttack = playerAttack1.replace(/[^a-zA-Z0-9 ]/g, '')
        console.log(playerAttack) 
        let computerAttack = allComputerCards[computerNum1].attacks[0].damage
        computerAttack = computerAttack.replace(/[^a-zA-Z0-9 ]/g, '')
        console.log(computerAttack)
        // console.log(computerAttack)
        let computerHp = allComputerCards[computerNum1].hp
        // console.log(computerHp)
        let playerHp = allPlayerCards[number1].hp
        // console.log(playerHp)
        
        // Battle Loop
        while (playerHp > computerHp){

            // if (playerAttack === 'NAN' || playerAttack === 'undefined' || playerAttack === undefined){
            //     playerAttack = allPlayerCardds[number1].attacks[1].damage
            //     console.log("Player second Attack Used ")
            // }
    
            // if (computerAttack === 'NAN' || computerAttack === 'undefined' ||computerAttack === undefined ){
            //     computerAttack = allComputerCards[computerNum1].attacks[1].damage
            //     console.log("Computer second Attack Used ")
            // }



            computerHp = computerHp - playerAttack
            localStorage.setItem(computerHp, computerHp)
            localStorage.getItem(computerHp)
            console.log(`${computerHp}`)
            playerHp = playerHp - computerAttack
            localStorage.setItem(playerHp, playerHp)
            localStorage.getItem(playerHp)
            console.log(`${playerHp}`)

        if (playerAttack > computerAttack && computerHp <= playerHp || playerHp === computerHp )    {
            console.log("Player Wins")
            alert("Player Wins")
            location.reload()
       
        } else (playerHp <= 0 && computerHp > 0);{
            alert("Computer Wins")
            location.reload()
                
        }
    }
})
    })
        //     if (playerHp > 0 && computerHp > 0){

        //         computerHp = computerHp - playerAttack
        //         localStorage.setItem(computerHp, computerHp)

        //         console.log(`CHP after PAttack ${computerHp}`)

        //         computerAttack = allComputerCards[computerNum1].attacks[0].damage
        //         console.log(`Name of CAttack ${computerAttack}`)
        
        //         playerHp = playerHp - computerAttack
        //         console.log(`playerHP After ${computerAttack}  ${playerHp}`)
        //         localStorage.setItem(playerHp, playerHp)
                
        //         localStorage.getItem(playerHp)
        //         localStorage.getItem(computerHp)

        //         console.log(`playerHP After ${computerAttack}  ${playerHp}`)
                
                
        //         if (playerHp > computerHp && computerHp <= 0)    {
        //                  console.log("Player Wins")
        //                  playerScore = playerScore++
        //                  playerScore.innerHTML = playerScore
        //                  if (computerHp <= 0){
        //                     console.log("Player BIG WIN  Wins")
        //                  } else myModal.style.display = "block"


        //                 }else if (playerHp < computerHp && playerHp <= 0){
        //                     console.log("Computer Wins")
        //                     computerScore = computerScore++
        //                     computerScore.innerHTML = computerScore
                            
        //                 }else (playerHp >0 && computerHp >0) ;{
        //                     localStorage.getItem(playerHp)
        //                     localStorage.getItem(computerHp)
        //                     playerHp = playerHp - computerAttack
        //                     localStorage.setItem(playerHp, playerHp)
                            
        //                    return playerHp
        //                 }
        //     }
        // })}) 
        
    

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

   