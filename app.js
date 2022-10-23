const boxes = document.querySelectorAll('.box');
const gameStatus = document.querySelector('#game-status');
const resetButton = document.querySelector('#reset-button');

//Set the winning combinations by using an array of indices
//Only focus on the three across, three down, and two diagonals
const winCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

//Set the placeholders for the initial state of the game.
//9 placeholders are needed for the 9 cells in the game.
let options = ['', '', '', '', '', '', '', '', ''];
//Keep track of the current player and when the game is running.
let currentPlayer = 'X';
let running = false;

//Need to initialize the game.
//This function will be called when the page loads.
function initializeGame(){
    //When a box is clicked, call the boxClicked function.
    boxes.forEach(box => box.addEventListener('click', boxClicked));
    //on click of the reset button, reset the game.
    resetButton.addEventListener('click', resetGame);
    //Who's turn is it?
    gameStatus.textContent = `${currentPlayer}'s turn`;

}
//Clicking the boxes and updating the boxes.
function boxClicked(){

}

function updateBox(box, index){

}
//Which player is playing/change between players.
//Check for a winner.




