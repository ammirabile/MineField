
var mineField = [];
var bombList  = [];

class cell {
    constructor(cell){
        this.isBomb = false;
        this.bombsClose = 0;
        this.isOpen = false;
    }
}

//Create MineField
function createMineField(){
    let thisField = []; 
    for(let i = 0; i < 10 ; i++){
        thisField[i] = [];
        for (let j = 0; j < 10; j ++){
            thisField[i][j] = new cell;
        }
    }
    return thisField;
}

//Print Field
function printField(field){
    let headers = "  ";
    for (let i = 0; i < field.length ; i++){
        headers += i + " ";
    }
    console.log(headers);
    
    for (let i = 0; i < field.length ; i++){
        let row = i + " ";
        for(let j = 0; j <field[i].length; j++){
            if(field[i][j].isOpen === true){
                if(field[i][j].isBomb === true){
                    row += "B " ;
                }
                else {
                    row += field[i][j].bombsClose + " ";
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
function placeBombs(field){

    for(let i = 0; i < 10 ; i++){
        let bombPlaced = false;
        while(!bombPlaced){
            let coord1 = Math.floor(Math.random() * field.length);
            let coord2 = Math.floor(Math.random() * field.length);
            if(field[coord1][coord2].isBomb === true){
                bombPlaced = false;
            }
            else {
                field[coord1][coord2].isBomb = true;
                bombPlaced = true;
            }
            console.log(field[coord1][coord2]);
            console.log(coord1,coord2);      
            bombList.push([coord1,coord2]);    
        }
        
    }
}

function isValidCoord(coord1,coord2,arr){
    console.log("Valid Coord Check :" + arr.length);
    if(coord1 < 0 || coord2 < 0 || coord1 >= arr.length || coord2 >= arr.length){
        return false;
    }
    return true;
}

//Look For Bombs
function lookForBombs(){
    let checkCoord = [-1,0,1];
    for(let coord of bombList){
        let coord1 = coord[0];
        let coord2 = coord[1];
        for(let rowCheck of checkCoord){
            for(let colCheck of checkCoord){
                let x = coord1 + rowCheck;
                let y = coord2 + colCheck;
                // console.log(coord);
                // console.log(x + " " + y);
                // console.log(typeof(colCheck));
                // console.log(isValidCoord(x,y,mineField));
                if(isValidCoord(x,y,mineField)){
                    // console.log(mineField[x][y]);
                    mineField[x][y].bombsClose += 1;
                }
            }
        }
    } 
}

function checkPlay(coord, grid) {
    if (coord.length !== 3 || coord.indexOf(",") === -1) {
        return false;
    } else if (coord[0] > grid.length || coord[2] > grid.length) {
        return false;
    } else if (grid[coord[0]][coord[2]].isOpen === true){
        return false;
    }
    return true;

}
function openCell(grid,coord){
    grid[coord[0]][coord[2]].isOpen = true;
    return grid[coord[0]][coord[2]].isBomb;
}

mineField = createMineField();
printField(mineField);
placeBombs(mineField);
printField(mineField);
lookForBombs();
printField(mineField);

let totalBombs = 10;
let lifes = 3;
let gameOver = false;
while (!gameOver){
    let validPlay = false;
    let play ;
    while(!validPlay){
        play = prompt("Choose a coordenate separated by comma");
        if (checkPlay(play,mineField)){
            validPlay = checkPlay(play,mineField);
        }
        else {console.log(`Not a valid coordenate!`);
        }
    }
    console.log(`Valid Play - ${play}`);
    console.log(`You have ${lifes} lifes left!!! \n`);
    if (openCell(mineField,play) === true){
        lifes -= 1;
        console.log(`BOOOOOOOM you lost 1 life - ${lifes} left\n`);

    }
    printField(mineField);
    if (lifes === 0){
        console.log(`GAME OVER!`);
        gameOver = true;
    }
}

    


