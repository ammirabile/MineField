var board = [];
var bombList  = [];

class cell {
    constructor(cell){
        this.isBomb = false;
        this.bombsClose = 0;
        this.isOpen = false;
        this.coord = [];
    }
}

//Create Board
function createBoard(){
    let board = []; 
    for(let i = 0; i < 10 ; i++){
        board[i] = [];
        for (let j = 0; j < 10; j ++){
            board[i][j] = new cell;
            board[i][j].coord = i+','+j;
        }
    }
    return board;
}

//Print Board
function printBoard(board){
    let headers = "  ";
    for (let i = 0; i < board.length ; i++){
        headers += i + " ";
    }
    console.log(headers);    
    for (let i = 0; i < board.length ; i++){
        let row = i + " ";
        for(let j = 0; j <board[i].length; j++){
            if(board[i][j].isOpen === false){ //change here
                if(board[i][j].isBomb === true){
                    row += "B " ;
                }
                else {
                    row += board[i][j].bombsClose + " ";
                }    
            }
            else {
                row += "  " ;
            }
        }
        console.log(row)
    }    
}

//Place Bombs
function placeBombs(board){
    for(let i = 0; i < 20 ; i++){
        let bombPlaced = false;
        while(!bombPlaced){
            let coord1 = Math.floor(Math.random() * board.length);
            let coord2 = Math.floor(Math.random() * board.length);
            if(board[coord1][coord2].isBomb === true){
                bombPlaced = false;
            }
            else {
                board[coord1][coord2].isBomb = true;
                bombPlaced = true;
            }
            console.log(board[coord1][coord2]);
            console.log(coord1,coord2);      
            bombList.push([coord1,coord2]);    
        }        
    }
}

board = createBoard();
placeBombs(board);
printBoard(board);
