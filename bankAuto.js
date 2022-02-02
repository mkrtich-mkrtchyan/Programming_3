
const Coin = require('./Coin');
let LivingCreature = require('./LivingCreature')

module.exports = class BankAuto extends LivingCreature{

    

     
        constructor(x, y, index) {
            super(x,y)
            this.index = index;
            this.diesel = 200;
            this.directions = [];
        }
    
        getNewCoordinates() {
            this.directions = [
                [this.x - 2, this.y - 2],
                [this.x - 1, this.y - 2],
                [this.x, this.y - 2],
                [this.x + 1, this.y - 2],
                [this.x + 2, this.y - 2],
                [this.x - 2, this.y - 1],
                [this.x - 1, this.y - 1],
                [this.x, this.y - 1],
                [this.x + 1, this.y - 1],
                [this.x + 2, this.y - 1],
                [this.x - 2, this.y],
                [this.x - 1, this.y],
                [this.x + 1, this.y],
                [this.x + 2, this.y],
                [this.x - 2, this.y + 1],
                [this.x - 1, this.y + 1],
                [this.x, this.y + 1],
                [this.x + 1, this.y + 1],
                [this.x + 2, this.y + 1],
                [this.x - 2, this.y + 2],
                [this.x - 1, this.y + 2],
                [this.x, this.y + 2],
                [this.x + 1, this.y + 2],
                [this.x + 2, this.y + 2]
            ];
        }
    
        chooseCell(character) {
            var found = [];
            this.getNewCoordinates();
            for (var i in this.directions) {
                var x = this.directions[i][0];
                var y = this.directions[i][1];
                if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
    
                    if (matrix[y][x] == character) {
                        found.push(this.directions[i]);
                    }
                }
            }
            return found;
        }
    
        move() {
            var newCell = Math.floor(this.chooseCell(0))
            var xCell = Math.floor(this.chooseCell(1))
            if (newCell) {
                this.diesel--;
                var newX = newCell[0];
                var newY = newCell[1];
    
                matrix[newY][newX] = this.index;
                matrix[this.y][this.x] = 0;
    
                this.y = newY;
                this.x = newX;
            }
            else if (xCell) {
                this.diesel -= 2;
                var newX = xCell[0];
                var newY = xCell[1];
    
                matrix[newY][newX] = this.index;
                matrix[this.y][this.x] = 1;
    
                this.y = newY;
                this.x = newX;
            }
            
        }
        eat() {
            var emptyCells = super.chooseCell(0);
            // var coin = coinCells[Math.floor(Math.random() * emptyCells.length)]
            var newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)]

           
            if (newCell) {
                var newX = Coin[0];
                var newY = Coin[1];
                // matrix[newY][newX] = this.index;
                matrix[this.y][this.x] = 0;
     
    
    
                for (var i in coinArr) {
                    if (newX == coinArr[i].x && newY == CoinArr[i].y) {
                        coinArr.splice(i, 1);
                        break;
                    }
                }
                this.y = newY;
                this.x = newX;
                this.diesel++;
    
            }
            
    
        }
    
        die() {
            if (this.diesel <= 0) {
                matrix[this.y][this.x] = 3;
                for (var i in bankAutoArr) {
                    if (this.x == bankAutoArr[i].x && this.y == bankAutoArr[i].y) {
                        grassEaterEaterArr.push(new GrassEaterEater(this.x,this.y,3));
                        break;
                    }
                }
            }
        }
    }
    
