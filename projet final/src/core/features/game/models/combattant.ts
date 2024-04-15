/**
 * Combattant générique : on ne peut pas l'instancier
 */
export abstract class Combattant {
    private _pointsDeVie = 100;

    attaquer(adversaire: Combattant): void {
        adversaire._pointsDeVie -= 50;
    }

    get pointsDeVie() {
        return this._pointsDeVie;
    }

    get estEnVie() {
        return this._pointsDeVie > 0;
    }
}