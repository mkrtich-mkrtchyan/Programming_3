let LivingCreature = require('./LivingCreature')

module.exports = class Grass extends LivingCreature{
    constructor(x, y) {
        super(x, y);
    }

    
    chooseCell(character) {
        let found = [];
        for (let i in this.directions) {
            let x = this.directions[i][0];
            let y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {

                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }


    mul() {
        this.multiply++;
        let newCell = grassCells[Math.floor(Math.random() * emptyCells.length)]
        if (this.multiply >= 50 && newCell) {
            let newGrass = new Grass(newCell[0], newCell[1], this.index);
            grassArr.push(newGrass);
            matrix[newCell[1]][newCell[0]] = 1;
            this.multiply = 0;
        }
    }
}