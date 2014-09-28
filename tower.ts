module Tower {
    export class Result {
        cells:boolean[][]
        overall:boolean = true;
    }

    export class Tower {

        private solution:number[][]

        constructor(basesize:number = 8, max:number = 10) {
            this.solution = this.initArray<number>(basesize)

            // Setup initial bottom row
            for (var i = 0; i < basesize; i++) {
                this.solution[0][i] = Math.ceil(Math.random() * max)
            }

            // Calculate solution for rest of the cells
            for (var i = 1; i < basesize; i++) {
                for (var j = 0; j < basesize - i; j++) {
                    this.solution[i][j] = this.solution[i - 1][j] + this.solution[i - 1][j + 1]
                }
            }
        }

        getStartingPoint():number[][] {
            var startingPoint = this.initArray<number>(this.solution.length);

            for (var i = 0; i < this.solution[0].length; i++) {
                startingPoint[0][i] = this.solution[0][i];
            }

            return startingPoint;
        }

        check(attempt:number[][]):Result {
            var result = new Result();
            result.cells = this.initArray<boolean>(this.solution.length);
            for (var i = 0; i < this.solution.length; i++) {
                for (var j = 0; j < this.solution.length - i; j++) {
                    if (this.solution[i][j] !== attempt[i][j]) {
                        result.overall = false;
                        result.cells[i][j] = false
                    } else {
                        result.cells[i][j] = true
                    }
                }
            }

            return result;
        }

        debug() {
            console.log("cells", this.solution)
            console.log("debugcheck", this.check(this.solution))
        }

        private initArray<T>(basesize:number):T[][] {
            var arr:T[][] = new Array(basesize);
            for (var i = 0; i < basesize; i++) {
                arr[i] = new Array(basesize - i);
            }
            return arr;
        }
    }
}
