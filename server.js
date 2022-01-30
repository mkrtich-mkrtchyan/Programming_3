const { count } = require('console');
var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var fs = require("fs");
const { isBoolean } = require('util');

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
const Grass = require("./Grass")
const GrassEater = require("./GrassEater")
const GrassEaterEater = require('./GrassEaterEater')
const coin = require('./coin')
const bankAuto = require('./bankAuto')

function rand(min, max) {
    return Math.random() * (max - min) + min;
}

for (let i = 0; i < n; i++) {
    matrix[i] = [];
    for (let j = 0; j < n; j++) {
        matrix[i][j] = Math.floor(rand(0, 6))

    }
}

io.sockets.emit("send matrix", matrix);




function ObjectCreator(matrix) {
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
                let tr = new coin(x, y, 4);
                coinArr.push(tr);
            }
            else if (matrix[y][x] == 5) {
                matrix[y][x] = 5;
                let trer = new bankAuto(x, y, 5);
                bankAutoArr.push(trer);
            }
        }
    }
    io.sockets.emit('send matrix', matrix);
}




grassArr = []
grassEaterArr = []
grassEaterEaterArr = []
coinArr = []
cankAuto = []



const grass = require("./grass")
const grassEater = require("./GrassEater")
const grassEaterEater = require("./GrassEaterEater")
const coinArr = require("./coin")
const bankAuto = require("./bankAuto")


  
setInterval(ObjectCreator, 300);


function game() {
    for (var i in grassArr) {
        grassArr[i].mul()
    }
    for (var i in grassEaterArr) {
        grassEaterArr[i].eat();
    }


    io.sockets.emit("send matrix", matrix);
}

setInterval(game, 1000)

io.on('connection', function(socket){
    createObject(matrix);
})