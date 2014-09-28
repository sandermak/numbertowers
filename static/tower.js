var Tower;
(function (_Tower) {
    var Result = (function () {
        function Result() {
            this.overall = true;
        }
        return Result;
    })();
    _Tower.Result = Result;

    var Tower = (function () {
        function Tower(basesize, max) {
            if (typeof basesize === "undefined") { basesize = 8; }
            if (typeof max === "undefined") { max = 10; }
            this.solution = this.initArray(basesize);

            for (var i = 0; i < basesize; i++) {
                this.solution[0][i] = Math.ceil(Math.random() * max);
            }

            for (var i = 1; i < basesize; i++) {
                for (var j = 0; j < basesize - i; j++) {
                    this.solution[i][j] = this.solution[i - 1][j] + this.solution[i - 1][j + 1];
                }
            }
        }
        Tower.prototype.getStartingPoint = function () {
            var startingPoint = this.initArray(this.solution.length);

            for (var i = 0; i < this.solution[0].length; i++) {
                startingPoint[0][i] = this.solution[0][i];
            }

            return startingPoint;
        };

        Tower.prototype.check = function (attempt) {
            var result = new Result();
            result.cells = this.initArray(this.solution.length);
            for (var i = 0; i < this.solution.length; i++) {
                for (var j = 0; j < this.solution.length - i; j++) {
                    if (this.solution[i][j] !== attempt[i][j]) {
                        result.overall = false;
                        result.cells[i][j] = false;
                    } else {
                        result.cells[i][j] = true;
                    }
                }
            }

            return result;
        };

        Tower.prototype.debug = function () {
            console.log("cells", this.solution);
            console.log("debugcheck", this.check(this.solution));
        };

        Tower.prototype.initArray = function (basesize) {
            var arr = new Array(basesize);
            for (var i = 0; i < basesize; i++) {
                arr[i] = new Array(basesize - i);
            }
            return arr;
        };
        return Tower;
    })();
    _Tower.Tower = Tower;
})(Tower || (Tower = {}));
