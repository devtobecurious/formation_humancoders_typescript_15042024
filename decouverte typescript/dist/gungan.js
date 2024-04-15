"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gungan = void 0;
class Gungan {
    pointsDeVie;
    constructor() {
        // this.prenom = prenom
    }
    parler() {
        console.info('Missa va partir');
    }
    get isAlive() {
        return this.pointsDeVie > 0;
    }
}
exports.Gungan = Gungan;
