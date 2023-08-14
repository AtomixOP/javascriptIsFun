let cards=[];
let sum= 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl= document.getElementById("massage-el");
let sumEl=document.getElementById("sum-el");
let cardEl=document.getElementById("card-el");



let player = {
    name: "Abhishek Sharma",
    chips: 145
}


let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

//getiing ramdom number between 0 to 13 
function getRandomCard(){
    let randomNumber=Math.floor(Math.random()*13) +1;
    
    //setting value to card through conditions
    if(randomNumber>10){
        return 10;
    }
    else if(randomNumber===1){
        return 11;
    } 
    else{
        return randomNumber;
    }
   
}


console.log(sum)

//starting the game
function start() {
isAlive= true;

let firstCard = getRandomCard();
let secondCard = getRandomCard();

 cards=[firstCard , secondCard];
 sum = firstCard + secondCard;
 renderGame()
}

function renderGame(){
      //for card using loop
      cardEl.textContent= "card: "
      for(let x=0; x<cards.length; x++){
          cardEl.textContent+=cards[x]+" ";
      }
      //using for calculating sum
      sumEl.textContent = "sum: "+ sum;
  
  
      //condition of the game
      if (sum <= 20) {
          message = "Do you want to draw a new card? 🙂"
      } else if (sum === 21) {
          message = "Wohoo! You've got Blackjack! 🥳"
          hasBlackJack = true
      } else {
          message = "You're out of the game! 😭"
          isAlive = false
      }
      messageEl.textContent = message
  
      console.log(messageEl)
}



//adding new card to the card element if some is not 21 
function newcard(){
 
//using logical or operater to get out of the game 
if (isAlive===true && hasBlackJack===false){

    let card=getRandomCard();
    sum += card
     // Pushing the card to the cards array
    cards.push(card)
    renderGame();
}


}
