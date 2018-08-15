const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false ;
let firstCard , secondCard ;


function flipCard() {
  this.classList.add('flip');

  if(!hasFlippedCard)
  {
      //first click
      hasFlippedCard = true ;
      firstCard =this; 

      return ;
  }
  
    //second click
    hasFlippedCard = false;
    secondCard = this;

    checkForMatch() ;
}

function checkForMatch(){
     //do cards match here
     let isMatch = firstCard.dataset.framework === secondCard.dataset.framework ;
     
     isMatch ? disableCards(): unFlipCards() ;
     
}

function disableCards() {
    firstCard.removeEventListener('click', flipCard) ;
    secondCard.removeEventListener('click', flipCard) ;
}

function unFlipCards() {
    setTimeout(() => {
        firstCard.classList.remove('flip') ;
        secondCard.classList.remove('flip') ;
      } , 1000) ;
}
cards.forEach(card => card.addEventListener('click', flipCard));