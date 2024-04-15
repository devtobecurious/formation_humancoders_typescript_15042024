import Wookiee from './core/features/game/models/wookie';
import Droide from './core/features/game/models/droide';
import { DeathMatchCombat } from './core/features/game/models/death-match.combat';
const wookie = new Wookiee();
const droide = new Droide();
const combat = new DeathMatchCombat();
combat.lancer(wookie, droide);
//# sourceMappingURL=main.js.map