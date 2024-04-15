/**
 * Base de tous les persos dans le jeu
 */
abstract class Character  {
    private _prenom: string;
//    #taille = 12;

    constructor(prenom: string, private _pointsDeVie: number) {
        this._prenom = prenom;
    }

    parler(): void {
        console.info('Je parle')
    }

    get pointsDeVie() {
        return this._pointsDeVie;
    }

    set pointsDeVie(value: number) {
        if(value <= 0) {
            value = 100;
        }

        this._pointsDeVie = value;
    }

    get prenom() {
        return this._prenom;
    }

    set prenom(value: string) {
        this._prenom = value;
    }
}

export default Character;