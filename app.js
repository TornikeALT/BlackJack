let player ={
    name : 'Tornike',
    chips : 145
}
let cards = [];
let sum = 0;
let blackJack = false;
let isAlive = false;
let message ='';
const messageEl = document.getElementById('message-el');
const sumeEl = document.getElementById('sum-el');
const cardsEl = document.getElementById('cards-el');
const newCardBtn = document.getElementById('new-card-btn');
const playerEl = document.getElementById('player-el');


playerEl.textContent = player.name + ': ' + player.chips + ' $';


function getRandomCard(){
   let randomNumber = Math.floor(Math.random() * 13 ) +1;
    if (randomNumber > 10){
        return 10
    }else if(randomNumber === 1){
        return 11
    }else{
        return randomNumber
    }
}


function startGame(){
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards =[firstCard, secondCard];
    sum = firstCard + secondCard;
    renderGame();
}


function renderGame(){
    cardsEl.textContent='CARDS: ';
    for(let i=0; i <cards.length; i++ ){
        cardsEl.textContent += cards[i] + ' ';
    }

    sumeEl.textContent="SUM:" + sum;
    if(sum <= 20 ){
        message="DO YOU WANT TO DRAW A NEW CARD? 😇";
    }else if (sum === 21 ){
        message = "YOU GOT BLACKJACK!! 😎";
        blackJack = true;
    }else{
        message = "YOU ARE OUT OF GAME! 😒"
        isAlive = false;
    }
   messageEl.textContent = message;
}

function newCard(){
    if(isAlive === true && blackJack === false){
        let thirdCard = getRandomCard();
        sum += thirdCard;
        cards.push(thirdCard);
        renderGame();
    }
}

