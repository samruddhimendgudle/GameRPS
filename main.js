function computerChoice() {
    let choices = ["rock", "paper", "scissor"];
    let randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function checkWinner(user, computer) {

    if(user==computer){
        return "It's a tie!";
    }
    if((user=="rock" && computer=="scissor") ||
       (user=="paper" && computer=="rock") ||
       (user=="scissor" && computer=="paper")){
        return "You win!";
    }else{
        return "Computer wins!";
    }

}

function playGame(userChoice) {

    let computer = computerChoice();

    let result = checkWinner(userChoice, computer);

    document.getElementById("result").innerHTML =
        "You: " + userChoice +
        "<br>Computer: " + computer +
        "<br>" + result;
}