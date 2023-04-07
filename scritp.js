// función que inicie el juego, redirecciona a la pagina de juego : Route: RockPaperScissors.html
function startGame() {
    window.location.href = "RockPaperScissors.html"
}

var userSelection
var computerSelection

// función que obtiene la selección del usuario

function getUserSelection(n) {
    userSelection = n

    // dar un valor alearotio a computerSelection
    computerSelection = Math.floor(Math.random() * 3)
    getResult()
}

// función que redirecciona a la pagina de resultado
function getResult() {
    window.location.href = "result.html"
    document.write(userSelection + " - " + computerSelection)
    if (((userSelection - 1 ) % 3) == computerSelection){
        document.write("Victory")
    }else if (userSelection == computerSelection){
        document.write("Tie")
    }else{
        document.write("Defeat")
    }
}