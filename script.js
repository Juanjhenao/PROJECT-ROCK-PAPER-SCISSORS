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

function restart (){
    const userWin = document.querySelector('.user-score');      //--> prevents the page from displaying
        userWin.textContent = `Your score: 0`;                  //--> an extra sum to the score
    const pcWin = document.querySelector('.computer-score');
        pcWin.textContent = `Computer score: 0`;
        window.location.reload()

}
function closeModal(){
    const closeModal = document.getElementById('modal-container');
    closeModal.classList.remove('show');
}

function numberOf(points){
    closeModal()
    points == rounds
    if (userScore == rounds){
        // const final = document.querySelector('.final-winner');
        // final.innerHTML = `You are the definitive winner <br> Select any tool to restart`;
        alert("hols")
        
    }

    else if (computerScore == rounds){
        // const final = document.querySelector('.final-winner');
        // final.innerHTML = `you really suck at this you should do something easier, like playing ukele for example <br> Select any tool to restart`;
        alert("p")
    }
}

function result(winner){
    if (winner == "user"){
        userScore++
        const userWin = document.querySelector('.user-score');
        userWin.textContent = `Player: ${userScore} `;

        const who = document.querySelector('.winner');
        who.textContent = `You won!`;

    }
    else if (winner == "computer"){
        computerScore++
        const pcWin = document.querySelector('.computer-score');
        pcWin.textContent = `Computer: ${computerScore} `;

        const who = document.querySelector('.winner');
        who.textContent = `You lose :(`;

    }
    else {
        const who = document.querySelector('.winner');
        who.textContent = `It's a Tie`;
    }
}


// function numberOf(points){                   no funciona xd
//     if (userScore == points){
//         alert("sos dios :v")
//     }

//     else if (computerScore == points){
//         alert("eres una mierda :V")
//     }
// }

// numberOf(5)



    
function userImage(image){
    if (image == "paper"){
        let userChoose = document.getElementById("user-choose");
        userChoose.src = 'images/paper.png';
    }
    else if (image == "rock"){
        let userChoose = document.getElementById("user-choose");
        userChoose.src = 'images/rock.png';
    }
    else if (image == "scissrs"){
        let userChoose = document.getElementById("user-choose");
        userChoose.src = 'images/scissors.png';
    }
}

function computerImage(image){
    if (image == "paper"){
        let userChoose = document.getElementById("computer-choose");
        userChoose.src = 'images/paper.png';
    }
    else if (image == "rock"){
        let userChoose = document.getElementById("computer-choose");
        userChoose.src = 'images/rock.png';
    }
    else if (image == "scissrs"){
        let userChoose = document.getElementById("computer-choose");
        userChoose.src = 'images/scissors.png';
    }
}
function round (computerSelection){                        //--> Play round
    computerSelection = nrandom(0,2)

    // const userTool = document.querySelector('.user-choose');
    // userTool.innerHTML = `Player: ${options[userSelection]}`;

    // const computerTool = document.querySelector('.computer-choose')
    // computerTool.textContent = `Computer: ${options[computerSelection]}`

  
if (userSelection == scissrs){
    userImage("scissrs");
    if (computerSelection == scissrs){
        computerImage("scissrs");
        result("tie");
        }
    else if (computerSelection == paper){
        computerImage("paper");
        result("user");
    }
    else if (computerSelection == rock){
        computerImage("rock");
        result("computer");
    }
}
else if (userSelection == paper){
    userImage("paper")
    if (computerSelection == paper){
        computerImage("paper");
        result("tie");
        }
    else if (computerSelection == rock){
        computerImage("rock");
        result("user");
    }
    else if (computerSelection == scissrs){
        computerImage("scissrs");
        result("computer");
    }
}
else if (userSelection == rock){
    userImage("rock")
    if (computerSelection == rock){
        computerImage("rock");
        result("tie");
    }
    else if (computerSelection == scissrs){
        computerImage("scissrs");
        result("user");
    }
    else if (computerSelection == paper){
        computerImage("paper");
        result("computer");
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
