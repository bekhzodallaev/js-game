"use-strict";

// Random computer result
// choose correct number for Rock, paper and scissors
// the function should return Rock paper or scissor


const computerPlay = function () {
    const numberComputer = Math.trunc(Math.random() * 10);
    let resultComputer = numberComputer / 2;
    if (Number.isInteger(resultComputer)) return "Paper";
    resultComputer = numberComputer / 3;
    if (Number.isInteger(resultComputer)) return "Scissors";
    return "Rock"
}
computerPlay();

console.log(computerPlay);

const playerPlay = function () {
    let wordPlayer = prompt().trim();
    wordPlayer = wordPlayer.toLowerCase();
    wordPlayer = wordPlayer[0].toUpperCase() + wordPlayer.splice(1);
    return wordPlayer;
}
playerPlay();



playRound(playerSelection, computerSelection) {

}
playRound(playerPlay(), computerPlay());


// 1, 2, 3, 4, 5, 6, 7, 8, 9
// The number which can not be devided by itself and one can be the first result as Rock
// even number which can be devided by 2 is integer Number.isInteger()
// The number Which can be devided by 3 is the third result scissors




// 1) number from one to ten
// 2) use one the number in the formula
// 3) use special formular in order to choose the rock, paper or scissors
// 4) we should use the result in the switch operator
// 5) the result should be should return Rock, paper or scissors