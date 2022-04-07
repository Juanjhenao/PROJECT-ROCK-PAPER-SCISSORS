function nrandom (minimo, maximo){                                            //--> Random number gen
    let number =  Math.floor(Math.random() * (maximo - minimo + 1) + minimo)
    return number;
 }

let scissrs = 0;
let paper = 1;
let rock = 2;

let options = ["Scissrs", "Paper", "Rock"];

let userSelection;
let computerSelection;

let games;
let computerScore = 0;
let userScore = 0;




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
function closeModal(){
    const closeModal = document.getElementById('modal-container');
    closeModal.classList.remove('show');
}



const bestOf3 = document.querySelector('.best3');
bestOf3.addEventListener('click', ()=> {
    closeModal();
    games = 3;
});
const bestOf5 = document.querySelector('.best5');
bestOf5.addEventListener('click', ()=> {
    closeModal();
    games = 5;
});
const bestOf10 = document.querySelector('.best10');
bestOf10.addEventListener('click', ()=> {
    closeModal()
    games = 10;
});
function restart (){
    const userWin = document.querySelector('.user-score');      //--> prevents the page from displaying
        userWin.textContent = `Player: 0`;                  //--> an extra sum to the score
    const pcWin = document.querySelector('.computer-score');
        pcWin.textContent = `Computer: 0`;
        window.location.reload()

}
function numberOf(games){
if (userScore == games){
    const showModal = document.querySelector('#modal-container2');
    showModal.classList.add('show');
  }
else if (computerScore == games){
    const lostModal = document.querySelector('.title-modal2');
    lostModal.textContent = "You suck at this game, you should do something easier, like being a senator for example.";
    const showModal = document.querySelector('#modal-container2');
    showModal.classList.add('show');
}

}

function result(winner){
    if (winner == "user"){
        userScore++
        const userWin = document.querySelector('.user-score');
        userWin.textContent = `Player: ${userScore} `;
        const who = document.querySelector('.winner');
        who.textContent = `You won!`;
        numberOf(games);
    }
    else if (winner == "computer"){
        computerScore++
        const pcWin = document.querySelector('.computer-score');
        pcWin.textContent = `Computer: ${computerScore} `;
        const who = document.querySelector('.winner');
        who.textContent = `You lose :(`;
        numberOf(games);
    }
    else {
        const who = document.querySelector('.winner');
        who.textContent = `It's a Tie`;
    }
};
numberOf(games);
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
};