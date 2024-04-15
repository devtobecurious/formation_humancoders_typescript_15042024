export class DeathMatchCombat {
    lancer(combattant1, combattant2) {
        while (combattant1.estEnVie && combattant2.estEnVie) {
            combattant1.attaquer(combattant2);
            if (combattant2.estEnVie) {
                combattant2.attaquer(combattant1);
            }
        }
    }
}
//# sourceMappingURL=death-match.combat.js.map