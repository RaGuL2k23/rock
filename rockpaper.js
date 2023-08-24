let win=0 , lose = 0; // inialising man score and computer score;
function getComputerChoice(){
  let a = Math.floor(Math.random()*3);//produce 0 , 1, 2 
  if (a === 0){   
    return "rock";
  }
  else if (a === 1) {
    return "paper";
  }                         // computer chooses
  else if (a === 2) {
    return "scissors";
  }
}



function playRound(playerSelection,computerSelection){// outputs to be returned 
     if(playerSelection === computerSelection){         // in order to declare
      h1.textContent = "tie";
    }
    else if ( playerSelection === 'rock' && computerSelection ==='paper'){
       
        ++lose;// replaced
        h1.textContent= 'you lose! paper beats rock'; 

    }
    else if ( playerSelection === 'paper' && computerSelection ==='rock'){
        ++win;// replaced
        h1.textContent ='you win! paper beats rock';

    }
    else if ( playerSelection === 'paper' && computerSelection === 'scissors'){
        ++lose;// replaced
        h1.textContent = ' you lose! scissors beat paper';
    }
    else if ( playerSelection === 'scissors' && computerSelection === 'paper'){
        ++win;// replaced
        h1.textContent = 'you win! scissors beat paper';
    }
    else if ( playerSelection === 'rock' && computerSelection === 'scissors'){
        ++win;// replaced
        h1.textContent = 'you win! rock beat scissors';
    }
    else if ( playerSelection === 'scissors' && computerSelection === 'rock'){
       ++lose;
        // replaced
        h1.textContent = 'you lose! rock beat scissors';
    }
    console.log('round results','your score ',win ,'\n','computer score :',lose);
    yourScore.textContent = win;
    ComputerScore.textContent = lose;
    if ( win == 5 ||  lose == 5){
      if (win < lose){
        h2.textContent="computer wins";
        h1.textContent = " 🤖🤖🤖Try again better luck !"
      }
      else{
       h2.textContent="You win!";
       h1.textContent = "😎😎😎You're a Warrior⚡⚡⚡"
    }
    win = 0;lose = 0;
    
    }
  }

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

const div = document.querySelector("displayer");
const h1 = document.querySelector(".text");
const h2 = document.querySelector("h2");

h1.textContent = "hello press button to start the game";
const buttons = document.querySelectorAll("input");
buttons.forEach(button => {
  button.addEventListener('click',()=>playRound(button.value,getComputerChoice()))
});
refreshButton = document.querySelector(".refresh")
refreshButton.onclick = () => {
  win = 0 ; lose = 0;
  h1.textContent = "start again";
  h2.textContent = "";;
  
}
const ComputerScore  = document.querySelector(".lose")
const yourScore = document.querySelector(".win")