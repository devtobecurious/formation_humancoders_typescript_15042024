import {AvecDeLaVie} from './avec-de-la-vie'
import {NumberOrUndefined} from './core'

// type TypeOrUndefined<T> = T | undefined
// type NumberOrUndefined = TypeOrUndefined<number>
// type NumberOrUndefined = number | undefined // Première version, non générique

export class Gungan { //implements AvecDeLaVie {
    // pointsDeVie : number | undefined // utilisation unique du type
    pointsDeVie: NumberOrUndefined;
// pointsDeVie ?: number;


    // 1° technique pour éviter le !  constructor(pts: number) {
    // 2. ° technique constructor(private pointsDeVie: number) {
        // this.prenom = prenom
        //this.pointsDeVie = pts;
    //}    

    parler() {
        console.info('Missa va partir')
    }

    // get isAlive() { // accesseur depuis une propriété
    //     return this.pointsDeVie > 0;
    // }
}