
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
function createMineField(field){
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
            if(field[i][j].isBomb === true){
                row += "B " ;
            }
            else {
                row += "  "
            }
        }
        console.log(row)
    }
    
}

//Place Bombs
function placeBombs(arr){
    for(let i = 0; i < 5 ; i++){
        let coord1 = Math.floor(Math.random() * arr.length);
        let coord2 = Math.floor(Math.random() * arr.length);
        mineField[coord1][coord2].isBomb = true;
        console.log(mineField[coord1][coord2]);
        console.log(coord1,coord2);       
        bombList.push([coord1,coord2]);
    }
}

function isValidCoord(coord1,coord2){
    if(coord1 < 0 || coord2 < 0){
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
                if(isValidCoord([coord[0]+rowCheck],[coord[1]+colCheck])){
                    console.log(mineField[1][1]);
                    console.log(mineField[coord[0]+rowCheck][coord[1]+colCheck]);
                    mineField[coord[0]+rowCheck][coord[1]+colCheck].bombsClose += 1;
                    console.log(mineField[coord[0]+rowCheck][coord[1]+colCheck]);
                }
            }
        }
    } 
}

mineField = createMineField(mineField);
printField(mineField);
placeBombs(mineField);
printField(mineField);
lookForBombs();

