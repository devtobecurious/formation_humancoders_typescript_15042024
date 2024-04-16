// import { Wookiee } from './wookiee'
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

type Armure = {
    protection: number
}
type AvecPouvoirArmure = Armure & {
    emission: number
}

const armure: AvecPouvoirArmure = {
    protection: 12,
    emission: 100
}

// Règle :
/*
 type : pour le reste (type interne, cadrage de fonction, alias)
 Interface : DTO (ceux qui viennent de l'api) + implémentation class
 Class: dès que j'ai besoin d'un constructor => Injection de dépendance

 compléter : généricité <> et le  <extends >
*/

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


//#region Mapped type
type BoolOrNumber = {
    [key: string]: boolean | number
}

const statistic: BoolOrNumber = {
    janvier: 10,
    fevrier: false,
    mars: false,
    avril: 12
}

type Mapped<T> = {
    [key: string]: T
}
const statisticPlus: Mapped<number> = {
    janvier: 0,
    fevrier: 10
}
//#endregion

//#region Type guard avancé
type StringOrTableOrNumber = string | string[] | number
function afficherContent(value: StringOrTableOrNumber) {
    if (typeof value === 'string') {
        console.info(value.toLowerCase())
    }
}

type MethodeVide = () => void

type Droide = { combattre: MethodeVide }
type Jedi = { utiliserForce: MethodeVide }

function combattre(item: Droide | Jedi) {
    if ('combattre' in item) {
        item.combattre()
    }
}

// functional type guard
function isAvecForce(item: Droide | Jedi): item is Jedi {
    return (item as Jedi).utiliserForce !== undefined
}

function combattreAmeliore(item: Droide | Jedi) {
    if(isAvecForce(item)) {
        item.utiliserForce()
    } else {
        item.combattre()
    }
}
//#endregion

//#region Record
type ListeMois = 'janvier' | 'fevrier' | 'mars'
type Stat = {
    date: Date,
    nbParties: number
}
const statList: Record<ListeMois, Stat> = {
    janvier: { date: new Date(), nbParties: 10 },
    fevrier: { date: new Date(), nbParties: 1 },
    mars: { date: new Date(), nbParties: 20 }
}
//#endregion

//#region Types supplémentaires
interface Wookiee {
    id: number,
    prenom: string,
    age: number,
    height: number
}

type PickWookiee = Pick<Wookiee, 'prenom' | 'age'>
function updateWookieeStep2(wookie: PickWookiee): void {
    wookie.age = 12
    wookie.prenom = 'chewie'
}

type OmitWookiee = Omit<Wookiee, 'id'>
function createWookiee(wookie: OmitWookiee): void {
    wookie.age = 12
    wookie.height = 250
    wookie.prenom = 'chewie'
}

type WookieeComplet = OmitWookiee &  {
    id: number
}

type PartialWookiee = Partial<Wookiee>
const partial: PartialWookiee = {
    id: 10,
    prenom: 'Chewie'
}

type StepOneWookiee = Pick<PartialWookiee, 'prenom' | 'age'>
type StepTwoWookiee = Pick<PartialWookiee, 'height'>

const stepOne: StepOneWookiee = {
    age: 18,
    prenom: 'Chewie'
}

const stepTwo: StepTwoWookiee = {
    height: 250
}

const final: PartialWookiee = {
    ...stepOne,
    ...stepTwo
}

type RequiredWookiee = Required<Pick<PartialWookiee, 'prenom'>> 


type GameConfig = {
    nbCol: number,
    nbRows: number
}
type ReadonlyConfig = Readonly<GameConfig>
//#endregion