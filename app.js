const boxes = document.querySelectorAll('.box');
const gameStatus = document.querySelector('#gameStatus');
const resetButton = document.querySelector('#resetButton');

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
//9 placeholders are needed for the 9 boxes in the game.
let options = ['', '', '', '', '', '', '', '', ''];
//Keep track of the current player and when the game is running.
let currentPlayer = 'X';
let running = false;

//Need to initialize the game.
initializeGame();
//This function will be called when the page loads.
function initializeGame(){
    //When a cell is clicked, call the cellClicked function.
    boxes.forEach(box => box.addEventListener('click', boxClicked));
    //on click of the reset button, reset the game.
    resetButton.addEventListener('click', resetGame);
    //Who's turn is it?
    gameStatus.textContent = `${currentPlayer}'s turn`;
    running = true;
}
//Clicking the boxes and updating the boxes.
function boxClicked(){
    //which ever box is clicked, get the index of that box.
    const boxIndex = this.getAttribute('boxIndex');
    //only update the box if nothing is there.
    if(options[boxIndex] !== '' || !running){
        return;
    }
    updateBox(this, boxIndex);
    //Test changePlayer();
    checkForWin();
}

function updateBox(box, index){
    options[index] = currentPlayer;
    box.textContent = currentPlayer;
}
//Which player is playing/change between players.
function changePlayer(){
    //if the current player is X, change it to O.
    currentPlayer = (currentPlayer == 'X') ? 'O' : 'X';
    gameStatus.textContent = `${currentPlayer}'s turn`;
}
//Check for a winner.
function checkForWin(){

}

//Reset the game.
function resetGame(){}




