import { Wookiee } from './wookiee'
import { Gungan } from './gungan'
import Character from './character'
import {AvecDeLaVie} from './avec-de-la-vie'
import { CalculerTTC } from './core'


const jarjar: Gungan = new Gungan()
jarjar.pointsDeVie = 150

// pas de constructor
const jarjarbis = { // Objet literal / singleton
    pointsDeVie: 100,
    parler: () => {},
    isAlive: true
}

type AvecPtVie = {
    pointsDeVie: number
}

//function afficherLesInfos(gungan: {pointsDeVie: number}): void {
function afficherLesInfos(gungan: AvecPtVie): void {
    console.info(gungan.pointsDeVie)
}

// afficherLesInfos(jarjar) // il n'a plus de points de vie 
afficherLesInfos(jarjarbis)


// let wookiee = new Wookiee('Chewie', 100)
// wookiee.pointsDeVie = 150
// // wookiee = new Gungan();


// let character: Character = new Wookiee('Chewie', 100)
// // let char2 = new Character()
// character.parler();
// //character.secouerLesMains()



//#region Unknown
function afficherNimp(item: unknown): void {
    if(typeof item === 'string') {
        console.info(item.toLowerCase());
    }

    if(typeof item === 'number') {
        console.info(item.toFixed(2));
    }
}

afficherNimp('HELLO')
afficherNimp(1)
//#endregion

//#region type Pipé
function afficherStructure(item: string | number): void {
    if(typeof item === 'string') { // type guard primitif
        console.info(item.toLowerCase());
    }

    if(typeof item === 'number') {
        console.info(item.toFixed(2));
    }
}

function afficherStructureBis(item: 1 | 'HELLO'): void {
    // type guard pour controler
}
//#endregion

//#region Enum 
enum TypeArme {
    ARBALETE,
    PISTOLET,
    SABRE
}

type EnumPipe = keyof typeof TypeArme

const en: EnumPipe = 'ARBALETE'

// Mieux vaut lui préférer l'enum avec pipe
type TypeArmePipe = 'Arbalete' | 'Pistolet' | 'Sabre'
type TypeArmeAmeliore = TypeArmePipe | 'Force'

function affecterTypeArme(type: TypeArmeAmeliore): void {
    type = 'Force'
}
//#endregion

//#region Functions
function calculerTTC(valueHT: number): number {
    return valueHT * 1.2
}

function preparerMonnaie(callbackTTC: any): void {
    const resultTTC = callbackTTC(20)
}

function preparerMonnaieBis(callbackTTC: Function): void {
    const resultTTC = callbackTTC('Test') // Aucun test sur le type
}

function preparerMonnaieTer(callbackTTC: CalculerTTC): void {
    const resultTTC = callbackTTC(20)
}
//#endregion

