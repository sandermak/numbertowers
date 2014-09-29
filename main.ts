/// <reference path="types/libs.d.ts" />
/// <reference path="tower.ts" />

module Main {

    class TowerController {

        base: number = 8
        max: number = 10
        tower: Tower.Tower
        attempt: number[][]
        result: Tower.Result
        imageURL: string

        constructor(private $scope: ng.IScope) {
           this.refresh()
        }

        check():void {
            if(this.imageURL === undefined)
                this.imageURL = "http://edgecats.net?" + Math.ceil(Math.random() * 1e6)
            this.result = this.tower.check(this.attempt)
        }

        refresh():void {
            this.tower = new Tower.Tower(this.base, this.max);
            this.attempt = this.tower.getStartingPoint()
            this.result = undefined
            this.imageURL = undefined
        }

    }

    var towerModule = angular.module('tower', [])
    towerModule.controller('TowerController', TowerController)

}