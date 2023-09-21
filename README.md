# EpicQuest

For this projects I am creating a Pokemon game that utilizes an api call from https://api.pokemontcg.io.

my Wire Frame can be viewed follwing this link. 
https://www.figma.com/file/o0e9v8LVFv1Fhps3f9HOcU/Untitled?type=design&node-id=0%3A1&mode=design&t=mFNdHIp8WB58hHxX-1 

My successful API Call can be viewed by utilizing live server and entering in dp3-1 or mcd19-1 into the search bar. 

The game will begin with 2 "stacks" of cards. 1 set will be for playerOne and the second will be for a computerOpponent. 

When playerOne selects start game the player and computer will be randomly assinged 7 cards. The Player will then select which card to play first. Once the player decides which card to use the computer will randomly assign a card from its hand to play first. 

Once the initial card has been chosen by playerOne, PlayerOne will see a pop up box and choose a move from one of the move buttons. The damage from that move will be deducted from the computerChoice and a dialog box will display the amount of damage inflicted.

The screen will then animate the computerCard by shaking the card and the computer will then choose an attack at random and the player card will animate with a shaking motion. A display box showing the amount of damage recieved will then display for playerOne.

If the computer card loses its health points first then the computer will automatically choose another card to enter into the battle.

If playerOne card is defeated first the user will be prompted to choose another card and gameplay will continue. 

Gameplay will continue until either playerOne or the computer is out of cards.

The screen will then animate displaying the winner in a pop up box and the option to play again.