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
        return "tie";
    }
    else if ( playerSelection === 'rock' && computerSelection ==='paper'){
        return 'you lose! paper beats rock'; 
        ++lose;console.log('your score ',win ,'\n','computer score :',lose);

    }
    else if ( playerSelection === 'paper' && computerSelection ==='rock'){
        return 'you win! paper beats rock';++win;console.log('your score ',win ,'\n','computer score :',lose);

    }
    else if ( playerSelection === 'paper' && computerSelection === 'scissors'){
        return ' you lose! scissors beat paper';++lose;console.log('your score ',win ,'\n','computer score :',lose);
    }
    else if ( playerSelection === 'scissors' && computerSelection === 'paper'){
        return 'you win! scissors beat paper';++win;console.log('your score ',win ,'\n','computer score :',lose);
    }
    else if ( playerSelection === 'rock' && computerSelection === 'scissors'){
        return 'you win! rock beat scissors';++win;console.log('your score ',win ,'\n','computer score :',lose);
    }
    else if ( playerSelection === 'scissors' && computerSelection === 'rock'){
        return 'you lose! rock beat scissors';++lose;
        console.log('your score ',win ,'\n','computer score :',lose);
    }
    
}
function game(){         
     playerSelection = prompt("choose your weapon,").toLowerCase();
     computerSelection = getComputerChoice();
     console.log(playRound(playerSelection,computerSelection));
    


}
game();
 

 