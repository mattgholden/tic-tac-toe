const cells = document.querySelectorAll('.cell');
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
let currentPlayer = 'X';
let running = false;


//Keep track of the current player and when the game is running.
//Need to initialize the game.
//Clicking the cells and updating the cells.
//Which player is playing/change between players.
//Check for a winner.




