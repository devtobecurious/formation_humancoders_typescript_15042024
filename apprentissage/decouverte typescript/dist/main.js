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
    if (typeof item === 'string') { // type guard primitif
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
const armure = {
    protection: 12,
    emission: 100
};
// Règle :
/*
 type : pour le reste (type interne, cadrage de fonction, alias)
 Interface : DTO (ceux qui viennent de l'api) + implémentation class
 Class: dès que j'ai besoin d'un constructor => Injection de dépendance

 compléter : généricité <> et le  <extends >
*/
//#endregion
//#region Functions
function calculerTTC(valueHT) {
    return valueHT * 1.2;
}
function preparerMonnaie(callbackTTC) {
    const resultTTC = callbackTTC(20);
}
function preparerMonnaieBis(callbackTTC) {
    const resultTTC = callbackTTC('Test'); // Aucun test sur le type
}
function preparerMonnaieTer(callbackTTC) {
    const resultTTC = callbackTTC(20);
}
const statistic = {
    janvier: 10,
    fevrier: false,
    mars: false,
    avril: 12
};
const statisticPlus = {
    janvier: 0,
    fevrier: 10
};
function afficherContent(value) {
    if (typeof value === 'string') {
        console.info(value.toLowerCase());
    }
}
function combattre(item) {
    if ('combattre' in item) {
        item.combattre();
    }
}
// functional type guard
function isAvecForce(item) {
    return item.utiliserForce !== undefined;
}
function combattreAmeliore(item) {
    if (isAvecForce(item)) {
        item.utiliserForce();
    }
    else {
        item.combattre();
    }
}
//#endregion
