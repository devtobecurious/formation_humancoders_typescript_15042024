/**
 * Combattant générique : on ne peut pas l'instancier
 */
export class Combattant {
    constructor() {
        this._pointsDeVie = 100;
    }
    attaquer(adversaire) {
        adversaire._pointsDeVie -= 50;
    }
    get pointsDeVie() {
        return this._pointsDeVie;
    }
    get estEnVie() {
        return this._pointsDeVie > 0;
    }
}
//# sourceMappingURL=combattant.js.map