/// <reference path="types/libs.d.ts" />
/// <reference path="tower.ts" />
var Main;
(function (Main) {
    var TowerController = (function () {
        function TowerController($scope) {
            this.$scope = $scope;
            this.base = 8;
            this.max = 10;
            this.refresh();
        }
        TowerController.prototype.check = function () {
            if (this.imageURL === undefined)
                this.imageURL = "http://edgecats.net?" + Math.ceil(Math.random() * 1e6);
            this.result = this.tower.check(this.attempt);
        };

        TowerController.prototype.refresh = function () {
            this.tower = new Tower.Tower(this.base, this.max);
            this.attempt = this.tower.getStartingPoint();
            this.result = undefined;
            this.imageURL = undefined;
        };
        return TowerController;
    })();

    var towerModule = angular.module('tower', []);
    towerModule.controller('TowerController', TowerController);
})(Main || (Main = {}));
