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
       
        ++lose;// replaced
        return 'you lose! paper beats rock'; 

    }
    else if ( playerSelection === 'paper' && computerSelection ==='rock'){
        ++win;// replaced
        return 'you win! paper beats rock';

    }
    else if ( playerSelection === 'paper' && computerSelection === 'scissors'){
        ++lose;// replaced
        return ' you lose! scissors beat paper';
    }
    else if ( playerSelection === 'scissors' && computerSelection === 'paper'){
        ++win;// replaced
        return 'you win! scissors beat paper';
    }
    else if ( playerSelection === 'rock' && computerSelection === 'scissors'){
        ++win;// replaced
        return 'you win! rock beat scissors';
    }
    else if ( playerSelection === 'scissors' && computerSelection === 'rock'){
       ++lose;
        // replaced
        return 'you lose! rock beat scissors';
    }
    
}
function game(){         
     for ( let i = 0 ; i < 5; i++){
        playerSelection = 'paper'//prompt("choose your weapon,").toLowerCase();
     computerSelection = getComputerChoice();
     console.log(playRound(playerSelection,computerSelection));
     console.log(i+1,'round results','your score ',win ,'\n','computer score :',lose);
     }
     if ( win > lose){
        return '\nYou win!';// not print anything or returned value not used 
     }                                              // declares who win;
     else if (win < lose){
        return 'Computer wins\n';

     }
     else if ( win == lose){
        return 'tie';
     }


}
game();
 

 