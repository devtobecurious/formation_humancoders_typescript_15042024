import {Combattant} from './core/features/game/models/combattant'
import Wookiee from './core/features/game/models/wookie'
import Droide from './core/features/game/models/droide'
import {Combat} from './core/features/game/models/combat'
import {DeathMatchCombat} from './core/features/game/models/death-match.combat'

const wookie: Combattant = new Wookiee()
const droide: Combattant = new Droide()

const combat: Combat = new DeathMatchCombat()
combat.lancer(wookie, droide)