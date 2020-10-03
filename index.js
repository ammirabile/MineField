var board = [];
var bombList = [];

class cell {
    constructor(cell) {
        this.isBomb = false;
        this.bombsClose = 0;
        this.isOpen = false;
        this.coord = [];
        this.neighbours = [];
    }
}

//Create Board
function createBoard() {
    let board = [];
    for (let i = 0; i < 10; i++) {
        board[i] = [];
        for (let j = 0; j < 10; j++) {
            board[i][j] = new cell();
            board[i][j].coord = i + "," + j;
        }
    }
    return board;
}

//Print Board
function printBoard(board) {
    let headers = "  ";
    for (let i = 0; i < board.length; i++) {
        headers += i + " ";
    }
    console.log(headers);
    for (let i = 0; i < board.length; i++) {
        let row = i + " ";
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j].isOpen === false) {
                //change here
                if (board[i][j].isBomb === true) {
                    row += "B ";
                } else {
                    row += board[i][j].bombsClose + " ";
                }
            } else {
                row += "  ";
            }
        }
        console.log(row);
    }
}

//Place Bombs
function placeBombs(board) {
    for (let i = 0; i < 20; i++) {
        let bombPlaced = false;
        while (!bombPlaced) {
            let coord1 = Math.floor(Math.random() * board.length);
            let coord2 = Math.floor(Math.random() * board.length);
            if (board[coord1][coord2].isBomb === true) {
                bombPlaced = false;
            } else {
                board[coord1][coord2].isBomb = true;
                bombPlaced = true;
                bombList.push([coord1, coord2]);
            }
            console.log(board[coord1][coord2]);
            console.log(coord1, coord2);
        }
    }
    checkForNearBombs(bombList);
}
//Check If Valid Record
function isValidCoord(coord1, coord2, board) {
    console.log("Valid Coord Check :" + board.length);
    if (
        coord1 < 0 ||
        coord2 < 0 ||
        coord1 >= board.length ||
        coord2 >= board.length
    ) {
        return false;
    }
    return true;
}

//Open Cell
function openCell(coord1, coord2) {
    if (board[coord1][coord2].isOpen === false) {
        board[coord1][coord2].isOpen = true;
    }
}

//GetNeighbours
function getNeighbours(coord1, coord2, board) {
    let checkCoord = [-1, 0, 1];
    let arr = [];
    let newCoord = "";
    for (let i = 0; i < checkCoord.length; i++) {
        for (let j = 0; j < checkCoord.length; j++) {
            let x;
            let y;
            x = coord1 + checkCoord[i];
            y = coord2 + checkCoord[j];
            newCoord = `${x},${y}`;
            if (
                newCoord !== coord1 + "," + coord2 &&
                isValidCoord(x, y, board)
            ) {
                arr.push(newCoord);
            }
        }
    }
    return arr;
}

function checkForNearBombs(bList) {
    for (let i = 0; i < bList.length; i++) {
        let x = bList[i][0];
        let y = bList[i][1];
        let neighbours = getNeighbours(x, y, board);
        console.log(neighbours);
        for (coord of neighbours) {
            if (!board[coord[0]][coord[2]].isBomb) {
                board[coord[0]][coord[2]].bombsClose++;
            }
        }
    }
}

board = createBoard();
placeBombs(board);
printBoard(board);
