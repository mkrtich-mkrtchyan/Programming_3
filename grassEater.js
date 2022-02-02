// const coin = require('./coin');
let LivingCreature = require('./LivingCreature')

module.exports = class GrassEater extends LivingCreature{
    constructor(x, y){
        super(x, y);
        this.energy = 8
    
    }


    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }

    move() {

        var emptyCells = super.chooseCell(0);
        let newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)]

        if (newCell) {
            this.energy--;
            let newX = newCell[0];
            let newY = newCell[1];


            matrix[newY][newX] = this.index;
            matrix[this.y][this.x] = 0;


            this.y = newY;
            this.x = newX;
        }
        this.die();


    }
    mul() {
        let emptyCells = super.chooseCell(0)
        let newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)]
        if (this.energy >= 8 && newCell) {
            let newGrassEater = new GrassEater(newCell[0], newCell[1], this.index);
            grassEaterArr.push(newGrassEater);
            matrix[newCell[1]][newCell[0]] = this.index;
            this.energy = 5;
        }
    }


    eat() {
        let emptyCells = super.chooseCell(1)
        let newCell1 = emptyCells[Math.floor(Math.random() * emptyCells.length)]

        if (newCell1) {
            let newX = newCell1[0];
            let newY = newCell1[1];
            matrix[newY][newX] = this.index;
            matrix[this.y][this.x] = 0;



            for (let i in grassArr) {
                if (newX == grassArr[i].x && newY == grassArr[i].y) {
                    grassArr.splice(i, 1);
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
    die() {
        if (this.energy <= 0) {
            matrix[this.y][this.x] = 4;
            for (let i in grassEaterArr) {
                if (this.x == grassEaterArr[i].x && this.y == grassEaterArr[i].y) {
                    coinArr.push(new Coin(this.x, this.y))
                    break;
                }
            }

        }
    }
}