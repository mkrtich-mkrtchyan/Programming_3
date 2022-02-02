let LivingCreature = require('./LivingCreature')

module.exports = class Grass extends LivingCreature{
    constructor(x, y) {
        super(x, y);
    }

    

    mul() {
        this.multiply++;
        let emptyCells = super.chooseCell(0)
            let newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)]
        if (this.multiply >= 50 && newCell) {
            let newGrass = new Grass(newCell[0], newCell[1], this.index);
            grassArr.push(newGrass);
            matrix[newCell[1]][newCell[0]] = 1;
            this.multiply = 0;
        }
    }
}