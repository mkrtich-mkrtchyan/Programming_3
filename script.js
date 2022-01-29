var socket = io();


socket.on("weather", function (data) {
    weath = data;
})




let matrix = [];
let n = 80;
let m = 80;
let side = 10;
let grassArr = [];
let grassEaterArr = [];
let grassEaterEaterArr=[];

let coinArr = [];
let bankAutoArr = [];


function setup() {
    frameRate(30);

    background('#acacac');

    for (let y = 0; y < n; y++) {
        matrix[y] = [];

        for (let x = 0; x < m; x++) {
            matrix[y][x] = round(random([0,0,0,0,0,1,1,1,1,1,1,1,1,3,5,2,2,2,2,2]));
        }
    }
    createCanvas(matrix[0].length * side, matrix.length * side);
    for (let y = 0; y < matrix.length; ++y) {
        for (let x = 0; x < matrix[y].length; ++x) {
            if (matrix[y][x] == 1) {
                let gr = new Grass(x,y, 1);
                grassArr.push(gr);
            }
            else if (matrix[y][x] == 2) {
                let great = new GrassEater(x, y, 2);
                grassEaterArr.push(great);
            }
            else if(matrix[y][x] == 3){
                let greateat = new GrassEaterEater(x,y,3);
                grassEaterEaterArr.push(greateat);
            }
            else if(matrix[y][x] == 4){
                let tr = new coin(x,y,4);
                coinArr.push(tr);
            }
            else if(matrix[y][x] == 5){
                let trer = new bbankAuto(x,y,5);
                bankAutoArr.push(trer);
            }
            
            
            
        }
    }
}
function draw() {

    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                fill("green");
                rect(x * side, y * side, side, side);

            }
            else if (matrix[y][x] == 2) {
                fill('yellow');
                rect(x * side, y * side, side, side);
            }

            else if (matrix[y][x] == 3) {
                fill('red');
                rect(x * side, y * side, side, side);

            }
            else if(matrix[y][x] == 4){
                fill('#002aff');
                rect(x * side, y * side, side, side);
            }
            else if(matrix[y][x] == 5){
                fill('#32eded');
                rect(x * side, y * side, side, side);
            }
            else {
                fill("#acacac");
                rect(x * side, y * side, side, side);
            }
        }
    } for (let i in grassArr) {

        grassArr[i].mul();

    }
    for (let i in grassEaterArr) {
        
        grassEaterArr[i].eat();
       
    }
    for(let i in grassEaterEaterArr){
       
        grassEaterEaterArr[i].eat();
      
        
    }
    
    for(let i in coinArr){
        coinArr[i].die();
        coinArr[i].energyst();
    }
    for(let i in trasherArr){
        bankAutoArr[i].move();
        bankAutoArr[i].eat();
        bankAutoArr[i].die();
    }

}



 socket.on('send matrix', nkarel)
 


function Grass() {
    socket.emit("grass")
}
function addGrassEater() {
    socket.emit("add grass")
}
function addGrassEaterEater() {
    socket.emit("add grassEaterEater")
}
function addCoin() {
    socket.emit("add coin")
}
function addBankAuto() {
    socket.emit("add bankAuto")
}