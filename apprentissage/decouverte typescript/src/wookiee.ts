import Character from './character'

// seconde version
export class Wookiee extends Character {
    constructor(prenom: string, pointsDeVie: number) {
        console.info('grro aaa')
        super(prenom, pointsDeVie)
    }

    parler(): void {
        // super.parler();
        console.info('ROAAAAGGRR')
    }
    
    secouerLesMains(): void {

    }
}


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