import { Combattant } from "./combattant";

/**
 * Combat en .. je sais pas
 */
export abstract class Combat {
    /**
     * Méthode pour lancer un type de combat donné
     * @param combattant1 
     * @param combattant2 
     */
    abstract lancer(combattant1: Combattant, combattant2: Combattant): void;
}

/*
    - La classe combat ne sert à rien ? (static ?), pour faire du namespace
    - - Abandon de la POO : programmation fonctionnelle
    - A la place d'une abstract qu'avec des abstracts méthodes, on peut (on doit ?) utiliser une interface 
    - 
*/