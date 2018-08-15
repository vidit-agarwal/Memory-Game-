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
  }
  else {
      //second click
      hasFlippedCard = false;
      secondCard = this;

      //do cards match here
      if(firstCard.dataset.framework === secondCard.dataset.framework)
      {
          //its a match
          firstCard.removeEventListener('click', flipCard) ;
          secondCard.removeEventListener('click', flipCard) ;
      }
      else{
          //not a match
          setTimeout(() => {
            firstCard.classList.remove('flip') ;
            secondCard.classList.remove('flip') ;
          } , 1000) ;
       
      }


  }
}

cards.forEach(card => card.addEventListener('click', flipCard));