var socket = io();


socket.on("weather", function (data) {
    weath = data;
})




let matrix = [];
let n = 50;
let m = 50;
let side = 10;
let grassArr = [];
let grassEaterArr = [];
let grassEaterEaterArr=[];

let coinArr = [];
let bankAutoArr = [];


function setup() {
    frameRate(30);

    background('#acacac');
    createCanvas(50* side, 50 * side);
}
    

function nkarel(matrix) {

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
    for(let i in  bankAutoArr){
        bankAutoArr[i].move();
        bankAutoArr[i].eat();
        bankAutoArr[i].die();
    }

}



 socket.on('send matrix', nkarel)
 


// function Grass() {
//     socket.emit("grass")
// }
// function addGrassEater() {
//     socket.emit("add grass")
// }
// function addGrassEaterEater() {
//     socket.emit("add grassEaterEater")
// }
// function addCoin() {
//     socket.emit("add coin")
// }
// function addBankAuto() {
//     socket.emit("add bankAuto")
// }