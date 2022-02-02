let LivingCreature = require('./LivingCreature');

module.exports = class GrassEaterEater extends LivingCreature{
    constructor(x, y) {
       super(x,y)
       
        this.energy = 9;
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
        // this.emptyCells = this.chooseCell(0)
        // this.emptyCells = this.chooseCell(1)
        // var newCell = grassEaterEaterCells[Math.floor(Math.random() * emptyCells.length)]
        var emptyCells = super.chooseCell(0,1);
        var newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)]
        if (newCell) {
            this.energy -= 2;
            var newX = newCell[0];
            var newY = newCell[1];

            matrix[newY][newX] = this.index;
            matrix[this.y][this.x] = 1;

            this.y = newY;
            this.x = newX;
        }

        else if (newCell) {
            this.energy--;
            var newX1 = dCell[0];
            var newY1 = dCell[1];


            matrix[newY1][newX1] = this.index;
            matrix[this.y][this.x] = 0;


            this.y = newY1;
            this.x = newX1;
        }
        
        else{
            return
        }
        this.die();

    }




    eat() {
        // var great = grassEaterEaterCells[Math.floor(Math.random() * emptyCells.length)]
        let emptyCells = super.chooseCell(1)
        let newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)]

        if (newCell) {
            
            var newX = great[0];
            var newY = great[1];
            matrix[newY][newX] = this.index;
            matrix[this.y][this.x] = 0;



            for (var i in grassEaterArr) {
                if (newX == grassEaterArr[i].x && newY == grassEaterArr[i].y) {
                    grassEaterArr.splice(i, 1);
                    break;
                }
            }
            this.y = newY;
            this.x = newX;
            this.energy += 2;
           
this.mul();
        }
        else{
            this.move();
        }
    }
    mul() {
        var newCell = grassEaterEaterCells[Math.floor(Math.random() * emptyCells.length)]
        if (this.energy >= 15 && newCell) {
            var newgrasseatereater = new GrassEaterEater(newCell[0], newCell[1], this.index);
            grassEaterEaterArr.push(newgrasseatereater);
            matrix[newCell[1]][newCell[0]] = this.index;
            this.energy = 5;
            console.log(this.energy);
        }
    }

    die() {
        if (this.energy <= 0) {
            matrix[this.y][this.x] = 2;
            for (var i in grassEaterEaterArr) {
                if (this.x == grassEaterEaterArr[i].x && this.y == grassEaterEaterArr[i].y) {
                    grassEaterArr.push(new GrassEater(this.x, this.y, 2));
                    break;
                }
            }

        }
    }
}