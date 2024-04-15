import { Wookiee } from './wookiee'
import { Gungan } from './gungan'
import Character from './character'


let wookiee = new Wookiee('Chewie', 100)
wookiee.pointsDeVie = 150
// wookiee = new Gungan();


let character: Character = new Wookiee('Chewie', 100)
// let char2 = new Character()
character.parler();
//character.secouerLesMains()


