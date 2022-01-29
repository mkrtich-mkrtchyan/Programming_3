var express = require("express");
var app = express();

app.use(express.static("."));

app.get("/", function(req, res){
res.redirect("index.html");
});

app.listen(3000, function(){
console.log("Example is running on port 3000");
});



    for (let y = 0; y < n; y++) {
        matrix[y] = [];

        for (let x = 0; x < m; x++) {
            matrix[y][x] = round(random([0,0,0,0,0,1,1,1,1,1,1,1,1,3,5,2,2,2,2,2]));
        }
    }


      io.sockets.emit('send matrix', matrix)


         grassArr = []
    grassEaterArr = []
    grassEaterEaterArr = []
    CoinArr = []
    BankAuto = []



         Grass = require("./Grass")
     GrassEater = require("./GrassEater")
     GrassEaterEater = require("./GrassEaterEater")
     CoinArr = require("./Coin")
     BankAuto = require("./BankAuto")


         function createObject(matrix) {
        for (var y = 0; y < matrix.length; y++) {
            for (var x = 0; x < matrix[y].length; x++) {
           
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

            io.sockets.emit('send matrix', matrix)
        }


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