const columns = ["first_col", "second_col", "third_col", "fourth_col", "fifth_col", "sixth_col"];
let currentPlayer = 1; // Initialize currentPlayer to player 1
let gameBoard = createGameBoard();

// Create an empty game board matrix
function createGameBoard() {
    const board = [];
    for (let i = 0; i < 6; i++) {
        const row = [];
        for (let j = 0; j < 6; j++) {
            row.push(0); // 0 represents an empty cell
        }
        board.push(row);
    }
    return board;
}

// Function to check if the current player has won
function checkWin() {
    // Check horizontally
    for (let row = 0; row < 6; row++) {
        for (let col = 0; col < 4; col++) {
            if (
                gameBoard[row][col] === currentPlayer &&
                gameBoard[row][col + 1] === currentPlayer &&
                gameBoard[row][col + 2] === currentPlayer &&
                gameBoard[row][col + 3] === currentPlayer
            ) {
                return true;
            }
        }
    }

    // Check vertically
    for (let row = 0; row < 3; row++) {
        for (let col = 0; col < 7; col++) {
            if (
                gameBoard[row][col] === currentPlayer &&
                gameBoard[row + 1][col] === currentPlayer &&
                gameBoard[row + 2][col] === currentPlayer &&
                gameBoard[row + 3][col] === currentPlayer
            ) {
                return true;
            }
        }
    }

    // Check diagonally (both directions)
    for (let row = 0; row < 3; row++) {
        for (let col = 0; col < 4; col++) {
            if (
                gameBoard[row][col] === currentPlayer &&
                gameBoard[row + 1][col + 1] === currentPlayer &&
                gameBoard[row + 2][col + 2] === currentPlayer &&
                gameBoard[row + 3][col + 3] === currentPlayer
            ) {
                return true;
            }
            if (
                gameBoard[row][col + 3] === currentPlayer &&
                gameBoard[row + 1][col + 2] === currentPlayer &&
                gameBoard[row + 2][col + 1] === currentPlayer &&
                gameBoard[row + 3][col] === currentPlayer
            ) {
                return true;
            }
        }
    }

    return false; // No winner
}

// Function to handle the click behavior for a column
function handleColumnClick(columnId) {
    const column = document.getElementById(columnId);
    const elements = column.getElementsByTagName("td");
    let currentIndex = elements.length - 1;

    column.addEventListener("click", function () {
        if (currentIndex >= 0) {
            if (gameBoard[currentIndex][columns.indexOf(columnId)] === 0) {
                gameBoard[currentIndex][columns.indexOf(columnId)] = currentPlayer;
                elements[currentIndex].style.backgroundColor = currentPlayer === 1 ? "red" : "blue";
                if (checkWin()) {
                    alert(`Player ${currentPlayer} wins!`);
                    resetGame();
                } else {
                    currentPlayer = currentPlayer === 1 ? 2 : 1; // Switch player
                }
                currentIndex--;
            }
        }
    });
}

// Attach event listeners to all columns
columns.forEach(columnId => {
    handleColumnClick(columnId);
});

// Function to reset the game
function resetGame() {
    location.reload()
    /*
    gameBoard = createGameBoard();
    currentPlayer = 1;
    const cells = document.getElementsByTagName("td");
    for (let i = 0; i < cells.length; i++) {
        cells[i].style.backgroundColor = "white";
    }
    */
}
