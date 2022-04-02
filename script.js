function nrandom (minimo, maximo){                                            //--> Random number gen
    let number =  Math.floor(Math.random() * (maximo - minimo + 1) + minimo)
    return number;
 }

let scissrs = 0
let paper = 1
let rock = 2

let options = ["Scissrs", "Paper", "Rock"];

let userSelection;
let computerSelection;

let computerScore = 0
let userScore = 0

function button (tool){
    if (tool == 0){
        userSelection = scissrs
        round()
    }
    else if (tool == 1){
        userSelection = paper
        round()
    }
    else if (tool == 2){
        userSelection = rock
        round()
    }
}


function result(winner){
    if (winner == "user"){
        userScore++
        const userWin = document.querySelector('.user-score');
        userWin.textContent = `Your score: ${userScore}`;

        const who = document.querySelector('.winner');
        who.textContent = `You won!`;

    }
    else if (winner == "computer"){
        computerScore++
        const pcWin = document.querySelector('.computer-score');
        pcWin.textContent = `Computer score: ${computerScore}`;

        const who = document.querySelector('.winner');
        who.textContent = `You lose :(`;

    }
    else {
        const who = document.querySelector('.winner');
        who.textContent = `It's a Tie`;
    }
}





function round (computerSelection){                        //--> Play round
    computerSelection = nrandom(0,2)

    const userTool = document.querySelector('.user-choose');
    userTool.textContent = `Player: ${options[userSelection]}`;

    const computerTool = document.querySelector('.computer-choose')
    computerTool.textContent = `Computer: ${options[computerSelection]}`

if (userSelection == scissrs){
    if (computerSelection == scissrs){
        result("tie")
        }
    else if (computerSelection == paper){
        result("user")
    }
    else if (computerSelection == rock){
        result("computer")
    }
}
else if (userSelection == paper){
    if (computerSelection == paper){
        result("tie")
        }
    else if (computerSelection == rock){
        result("user")
    }
    else if (computerSelection == scissrs){
        result("computer")
    }
}
else if (userSelection == rock){
    if (computerSelection == rock){
        result("tie")
    }
    else if (computerSelection == scissrs){
        result("user")
    }
    else if (computerSelection == paper){
        result("computer")
    }
}
}

// round()



// function game(){                                                       //--> Play 5 times


// for (let i = 0; i < 5; i++) {
//     round(userSelection, computerSelection)
//  }
//  document.write(`User: ${userScore} <br> Computer: ${computerScore} <br>`)
//  if (computerScore > userScore){
//     document.write("Sorry you lost the game :(")
//  }
//  else if (userScore > computerScore){
//     document.write("Nice you won the game!")
//  }
//  else if (userScore == computerScore){
//     document.write("it's a Tie")
//  }
// }
