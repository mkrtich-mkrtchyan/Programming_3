let LivingCreature = require('./LivingCreature')

module.exports = class Coin extends LivingCreature{
    constructor(x, y){
        super(x, y);
        this.energy = 8;
        this.year = 1;
   
    }


    die() {

        if (this.year >= 1000) {
            matrix[this.y][this.x] = 1;


            for (var i in coinarr) {
                if (this.x == coinarr[i].x && this.y == coinarr[i].y) {
                    coinarr.splice(i, 1);
                    break;
                }
            }
        }
    }
    energyst() {
        this.year++;

    }


 }