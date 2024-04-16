"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gungan = void 0;
// type TypeOrUndefined<T> = T | undefined
// type NumberOrUndefined = TypeOrUndefined<number>
// type NumberOrUndefined = number | undefined // Première version, non générique
class Gungan {
    // pointsDeVie : number | undefined // utilisation unique du type
    pointsDeVie;
    // pointsDeVie ?: number;
    // 1° technique pour éviter le !  constructor(pts: number) {
    // 2. ° technique constructor(private pointsDeVie: number) {
    // this.prenom = prenom
    //this.pointsDeVie = pts;
    //}    
    parler() {
        console.info('Missa va partir');
    }
}
exports.Gungan = Gungan;
