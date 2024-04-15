import { Combattant } from "./combattant";

/**
 * Wookiee c'est super
 */
class Wookiee extends Combattant {
    attaquer(adversaire: Combattant): void {
        super.attaquer(adversaire);
        console.info(`Wookiee moi attaquer adversaire, résultat : ${adversaire.pointsDeVie}`)
    }
}

export default Wookiee;