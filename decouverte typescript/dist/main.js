"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const gungan_1 = require("./gungan");
const jarjar = new gungan_1.Gungan();
jarjar.pointsDeVie = 150;
// pas de constructor
const jarjarbis = {
    pointsDeVie: 100,
    parler: () => { },
    isAlive: true
};
//function afficherLesInfos(gungan: {pointsDeVie: number}): void {
function afficherLesInfos(gungan) {
    console.info(gungan.pointsDeVie);
}
// afficherLesInfos(jarjar) // il n'a plus de points de vie 
afficherLesInfos(jarjarbis);
// let wookiee = new Wookiee('Chewie', 100)
// wookiee.pointsDeVie = 150
// // wookiee = new Gungan();
// let character: Character = new Wookiee('Chewie', 100)
// // let char2 = new Character()
// character.parler();
// //character.secouerLesMains()
//#region Unknown
function afficherNimp(item) {
    if (typeof item === 'string') {
        console.info(item.toLowerCase());
    }
    if (typeof item === 'number') {
        console.info(item.toFixed(2));
    }
}
afficherNimp('HELLO');
afficherNimp(1);
//#endregion
//#region type Pipé
function afficherStructure(item) {
    if (typeof item === 'string') {
        console.info(item.toLowerCase());
    }
    if (typeof item === 'number') {
        console.info(item.toFixed(2));
    }
}
function afficherStructureBis(item) {
    // type guard pour controler
}
//#endregion
//#region Enum 
var TypeArme;
(function (TypeArme) {
    TypeArme[TypeArme["ARBALETE"] = 0] = "ARBALETE";
    TypeArme[TypeArme["PISTOLET"] = 1] = "PISTOLET";
    TypeArme[TypeArme["SABRE"] = 2] = "SABRE";
})(TypeArme || (TypeArme = {}));
const en = 'ARBALETE';
function affecterTypeArme(type) {
    type = 'Force';
}
//#endregion
