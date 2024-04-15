"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Base de tous les persos dans le jeu
 */
class Character {
    _pointsDeVie;
    _prenom;
    //    #taille = 12;
    constructor(prenom, _pointsDeVie) {
        this._pointsDeVie = _pointsDeVie;
        this._prenom = prenom;
    }
    parler() {
        console.info('Je parle');
    }
    get pointsDeVie() {
        return this._pointsDeVie;
    }
    set pointsDeVie(value) {
        if (value <= 0) {
            value = 100;
        }
        this._pointsDeVie = value;
    }
    get prenom() {
        return this._prenom;
    }
    set prenom(value) {
        this._prenom = value;
    }
}
exports.default = Character;
