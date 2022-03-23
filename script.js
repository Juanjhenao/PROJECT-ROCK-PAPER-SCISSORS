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

function round (userSelection, computerSelection){                        //--> Play round
    computerSelection = nrandom(0,2)
    userSelection = prompt(`Select your tool \nScissrs: 0\nPaper: 1\nRock: 2`)
    alert(`You select: ${options[userSelection]}`)
    alert(`Computer select: ${options[computerSelection]}`)
if (userSelection == scissrs){
    if (computerSelection == scissrs){
        alert ("It's a Tie")
        }
    else if (computerSelection == paper){
        alert ("You Win :D")
        userScore++
    }
    else if (computerSelection == rock){
        alert("You lose :(")
        computerScore++
    }
}
else if (userSelection == paper){
    if (computerSelection == paper){
        alert ("It's a Tie")
        }
    else if (computerSelection == rock){
        alert ("You Win :D")
        userScore++
    }
    else if (computerSelection == scissrs){
        alert("You lose :(")
        computerScore++
    }
}
else if (userSelection == rock){
    if (computerSelection == rock){
    alert ("It's a Tie")
    }
    else if (computerSelection == scissrs){
        alert ("You Win :D")
        userScore++
    }
    else if (computerSelection == paper){
        alert("You lose :(")
        computerScore++
    }
}
}





function game(){                                                       //--> Play 5 times


for (let i = 0; i < 5; i++) {
    round(userSelection, computerSelection)
 }
 document.write(`User: ${userScore} <br> Computer: ${computerScore} <br>`)
 if (computerScore > userScore){
    document.write("Sorry you lost the game :(")
 }
 else if (userScore > computerScore){
    document.write("Nice you won the game!")
 }
 else if (userScore == computerScore){
    document.write("it's a Tie")
 }
}

game()

