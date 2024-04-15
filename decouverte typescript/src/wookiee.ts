import Character from './character'

// seconde version
export class Wookiee extends Character {
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