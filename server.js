const { count } = require('console');
var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var fs = require("fs");


app.use(express.static("."));

app.get('/', function (req, res) {
    res.redirect('index.html');
});
server.listen(3000, function () {
   console.log("runed on port:3000");
});


grassArr = [];
grassEaterArr = [];
grassEaterArr = [];
grassEaterEaterArr = [];
coinArr = [];
bankAutoArr = [];
matrix = [];

var n = 50;
 Grass = require("./Grass")
 GrassEater = require("./GrassEater")
 GrassEaterEater = require('./GrassEaterEater')
 Coin = require('./Coin')
 BankAuto = require('./BankAuto')

function rand(min, max) {
    return Math.floor(Math.random() * (max - min) + min) ;
}

for (let i = 0; i < n; i++) {
    matrix[i] = [];
    for (let j = 0; j < n; j++) {
        matrix[i][j] = Math.floor(rand(0, 6))

    }
}
console.log(matrix);

io.sockets.emit("send matrix", matrix);




function ObjectCreator() {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                matrix[y][x] = 1;
                let gr = new Grass(x, y, 1);
                grassArr.push(gr);
            }
            else if (matrix[y][x] == 2) {
                matrix[y][x] = 2;
                let great = new GrassEater(x, y, 2);
                grassEaterArr.push(great);
            }
            else if (matrix[y][x] == 3) {
                matrix[y][x] = 3;
                let greateat = new GrassEaterEater(x, y, 3);
                grassEaterEaterArr.push(greateat);
            }
            else if (matrix[y][x] == 4) {
                matrix[y][x] = 4;
                let tr = new Coin(x, y, 4);
                coinArr.push(tr);
            }
            else if (matrix[y][x] == 5) {
                matrix[y][x] = 5;
                let trer = new BankAuto(x, y, 5);
                bankAutoArr.push(trer);
            }
        }
    }
    io.sockets.emit('send matrix', matrix);
}







  
setInterval(ObjectCreator, 300);


function game() {
    for (let i in grassArr) {

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


    io.sockets.emit("send matrix", matrix);
}

setInterval(game, 1000)

io.on('connection', function(){
    ObjectCreator()
})
