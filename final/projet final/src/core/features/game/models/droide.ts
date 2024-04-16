import { Combattant } from "./combattant";

/**
 * Droide
 */
class Droide extends Combattant {
    attaquer(adversaire: Combattant): void {
        super.attaquer(adversaire)
        console.info(`Droide moi attaquer adversaire, résultat : ${adversaire.pointsDeVie}`)
    }
}

export default Droide;