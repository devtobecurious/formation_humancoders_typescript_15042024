import { Wookiee } from './wookiee'
import { Gungan } from './gungan'
import Character from './character'
import {AvecDeLaVie} from './avec-de-la-vie'


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


