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
afficherLesInfos(jarjar);
afficherLesInfos(jarjarbis);
// let wookiee = new Wookiee('Chewie', 100)
// wookiee.pointsDeVie = 150
// // wookiee = new Gungan();
// let character: Character = new Wookiee('Chewie', 100)
// // let char2 = new Character()
// character.parler();
// //character.secouerLesMains()
