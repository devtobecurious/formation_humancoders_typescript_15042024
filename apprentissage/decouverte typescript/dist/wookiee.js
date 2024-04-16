"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Wookiee = void 0;
const character_1 = __importDefault(require("./character"));
// seconde version
class Wookiee extends character_1.default {
    constructor(prenom, pointsDeVie) {
        console.info('grro aaa');
        super(prenom, pointsDeVie);
    }
    parler() {
        // super.parler();
        console.info('ROAAAAGGRR');
    }
    secouerLesMains() {
    }
}
exports.Wookiee = Wookiee;
// premiere version
// export class Wookiee {
//     private _prenom: string;
// //    #taille = 12;
//     constructor(prenom: string, private _pointsDeVie: number) {
//         this._prenom = prenom;
//     }
//     get pointsDeVie() {
//         return this._pointsDeVie;
//     }
//     set pointsDeVie(value: number) {
//         if(value <= 0) {
//             value = 100;
//         }
//         this._pointsDeVie = value;
//     }
//     get prenom() {
//         return this._prenom;
//     }
//     set prenom(value: string) {
//         this._prenom = value;
//     }
// }
