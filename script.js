let button = document.querySelector("#startButton")


button.addEventListener('click', async () => {
  
    //Player Variables
    let pokemonName = document.querySelector("#pokemonName")
    let pokemonImage = document.querySelector("#pokemonImage")
    let attackButton = document.querySelector("#attackButton")
    let playerScore = document.querySelector("#playerScore")
    //Computer Variables
    let comPokemonName= document.querySelector("#comPokemonName") 
    let comPokemonImage = document.querySelector("#comPokemonImage")
    let computerScore = document.querySelector("#computerScore")
       
    //Random Assingment of Cards
    let number1 = Math.floor(Math.random() * 250)
    let number2 = Math.floor(Math.random() * 250)
    let computerNum1 = Math.floor(Math.random() * 250)
    let computerNum2 = Math.floor(Math.random() * 250)

    console.log(number1)
    console.log(computerNum1)
    
    //Player Cards &API Call
    const randomCard1 =  await axios.get(`https://api.pokemontcg.io/v2/cards`)
    allPlayerCards = randomCard1.data.data
    pokemonName.innerText = allPlayerCards[number1].name
    pokemonImage.src = allPlayerCards[number1].images.small
   
    
   //Computer Cards & API Call
    const computerCard1 = await axios.get(`https://api.pokemontcg.io/v2/cards`)
    allComputerCards =computerCard1.data.data
    comPokemonName.innerText = allComputerCards[computerNum1].name
    comPokemonImage.src = allComputerCards[computerNum1].images.small
    

    //Attack Button
    let attack1 =  allPlayerCards[number1].attacks[0].name
    console.log(attack1)
    

    attackButton.innerText = attack1
    
    attackButton.addEventListener('click', () => {
        console.log("Start Attacks")
        let playerAttack =  allPlayerCards[number1].attacks[0].damage
        console.log(playerAttack) 
        let computerAttack = allComputerCards[computerNum1].attacks[0].damage
        console.log(computerAttack)
        let computerHp = allComputerCards[computerNum1].hp
        console.log(computerHp)
        let playerHp = allPlayerCards[number1].hp
        console.log(playerHp)
        

        console.log(`CStarting HP ${computerHp}`)
        console.log(`PAttack ${playerAttack}`)

        computerHp = computerHp - playerAttack
        console.log(`CHP after PAttack ${computerHp}`)

        console.log(`Name of CAttack ${computerAttack}`)

        playerHp = playerHp - computerAttack
        console.log(`playerHP After Attack ${playerHp}`)

        // Battle Loop
            if (playerHp > 0 && computerHp > 0){
                computerHp = computerHp - playerAttack
                console.log(`CHP after PAttack ${computerHp}`)
                
                computerAttack = allComputerCards[computerNum1].attacks[0].damage
                // playerHp = allPlayerCards[number1].hp
                console.log(`Name of CAttack ${computerAttack}`)
        
                playerHp = playerHp - computerAttack
                console.log(`playerHP After ${computerAttack}  ${playerHp}`)
                
                        if (playerHp > computerHp && computerHp <= 0)    {
                         console.log("Player Wins")
                         playerScore++
                         playerScore.innerHTML = playerScore

                        }else (playerHp < computerHp && playerHp <= 0);{
                            console.log("Computer Wins")
                            computerScore++
                            computerScore.innerHTML = computerScore}

                }else if (playerHp < computerHp && playerHp <= 0){
                    console.log("Computer Wins")
                    computerScore++
                    computerScore.innerHTML = computerScore
                }else (playerHp > 0 && computerHp <= 0);{
                    console.log("Player Wins")
                    playerScore++
                    playerScore.innerHTML = playerScore
                }
            
        }
    )


    
    



}
)
