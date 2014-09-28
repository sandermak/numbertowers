/// <reference path="types/libs.d.ts" />
/// <reference path="tower.ts" />

module Main {

    class TowerController {
        base: number = 8
        max: number = 10
        tower: Tower.Tower
        attempt: number[][]
        result: Tower.Result

        constructor() {
           this.refresh()
        }

        check():void {
            this.result = this.tower.check(this.attempt)
        }

        refresh():void {
            this.tower = new Tower.Tower(this.base, this.max);
            this.attempt = this.tower.getStartingPoint()
            this.result = undefined
        }
    }

    var towerModule = angular.module('tower', [])
    towerModule.controller('TowerController', TowerController)

}