import { Combat } from "./combat";
import { Combattant } from "./combattant";

export class DeathMatchCombat extends Combat {

    lancer(combattant1: Combattant, combattant2: Combattant): void {
        while(combattant1.estEnVie && combattant2.estEnVie) {
            combattant1.attaquer(combattant2)
            if(combattant2.estEnVie) {
                combattant2.attaquer(combattant1)
            }
        }
    }

}