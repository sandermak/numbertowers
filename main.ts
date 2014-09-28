/// <reference path="types/libs.d.ts" />
/// <reference path="tower.ts" />

module Main {

    console.log(new Tower.Tower());
    console.log("Starting")
    var towerModule = angular.module('tower', [])
    towerModule.controller('TowerController', TowerController)

    class TowerController {
        msg = "foo"
    }
}