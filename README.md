# EpicQuest

![Alt text](HAPcjg.jpg)

***Resources***
Deployment: https://pokemonbattlearena.surge.sh

For this projects I am creating a Pokemon game that utilizes an api call from https://api.pokemontcg.io.

my Wire Frame can be viewed follwing this link. 
https://www.figma.com/file/o0e9v8LVFv1Fhps3f9HOcU/Untitled?type=design&node-id=0%3A1&mode=design&t=mFNdHIp8WB58hHxX-1 

W3schools.com was used for any additional references to work through issues or complications.


***Gameplay***

The game will begin with 2 cards set on the table. 1 card will be for playerOne and the second will be for a computer opponent. 

When playerOne selects start game the player and computer will be randomly assinged 1 card. The player attack screen will appear, the user will be prompted to attack.

The damage from that move will be deducted from the computerChoice and a dialog box will display the amount of damage inflicted.

If the computer card loses its health points first then the player will be declared the winner.

Gameplay will continue until either playerOne or the computer is out of health.

The gameboard will then be reset.

***Challenges***

I forsee some challenges in drilling down the data from the API and storing it as an object. There is a large amount of data that is pulled on each request and the loading time could cause the user to lose interest.

I forsee challenges in developing the gameplay logic, the randomness of the cards, the math required for the individuals moves and its damage points, as well as the computer AI for the user to play with will all present a challenge.

***Stretch Goals***

I would like to add the following as stretch goals/ work in progress;

1. Modals that continue the gameplay instead of utilizing an alert box
2. Player being able to select from a card deck and being able to use multiple cards.
3. More animations for the cards
4. The ability to use any Pokemon Card (ie promo, Japanese language cards, special expansions)

***Unfinished***

1. Cards that do not have points assinged to the attack cause an error that I have not been able to work around yet.
