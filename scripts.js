const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false ;

let lockBoard = false ;

let firstCard , secondCard ;


function flipCard() {

  if(lockBoard) return ;

  if(this === firstCard) return ;

  this.classList.add('flip');

  if(!hasFlippedCard)
  {
      //first click
      hasFlippedCard = true ;
      firstCard =this; 

      return ;
  }
  
    //second click
    
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

    resetBoard();
}

function unFlipCards() {
    lockBoard = true ;
    setTimeout(() => {
        firstCard.classList.remove('flip') ;
        secondCard.classList.remove('flip') ;

        resetBoard();
      } , 1000) ;
}

function resetBoard() {
    [hasFlippedCard , lockBoard] = [false , false] ;
    [firstCard . secondCard] = [null , null] ;

}

(function shuffle()
{
    cards.forEach(card => {
        let random = Math.floor(Math.random() * 12) ;
        card.style.order= random ;
    }) ;
})() ;

cards.forEach(card => card.addEventListener('click', flipCard));