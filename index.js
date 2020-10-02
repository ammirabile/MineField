var board = [];
var bombList  = [];

class cell {
    constructor(cell){
        this.isBomb = false;
        this.bombsClose = 0;
        this.isOpen = false;
        this.coord = [];
        this.neighbours = [];
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
//Check If Valid Record
function isValidCoord(coord1,coord2,board){
    console.log("Valid Coord Check :" + board.length);
    if(coord1 < 0 || coord2 < 0 || coord1 >= board.length || coord2 >= board.length){
        return false;
    }
    return true;
}

//Open Cell
function openCell(coord1,coord2){
    if(board[coord1][coord2].isOpen === false){
        board[coord1][coord2].isOpen = true;
    }
}

//GetNeighbours
function getNeighbours(board){
    let checkCoord = [-1,0,1];
    for (let i =0;i<board.length;i++){
        for(let j = 0; j < board[i].length; j++){
            
        }
    }
}



board = createBoard();
placeBombs(board);
printBoard(board);
