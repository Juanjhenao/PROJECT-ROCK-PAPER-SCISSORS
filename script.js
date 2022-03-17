 function computerPlay (){
    let options = ["Rock", "Paper", "Scissrs"];
    let random = options[(Math.random()*options.length) | 0]
    document.write(random)

}

computerPlay();