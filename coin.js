let LivingCreature = require('./LivingCreature')

module.exports = class coin extends LivingCreature{
    constructor(x, y, index){
        super(x, y, index);
        this.energy = 8
   
    }

    consturctor(x, y, index) {
        this.x = x;
        this.y = y;
        this.index = index;
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