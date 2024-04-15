import { Combattant } from "./combattant";
/**
 * Droide
 */
class Droide extends Combattant {
    attaquer(adversaire) {
        super.attaquer(adversaire);
        console.info(`Droide moi attaquer adversaire, résultat : ${adversaire.pointsDeVie}`);
    }
}
export default Droide;
//# sourceMappingURL=droide.js.map