/**
 * 
 */
function Wookiee(prenom) { // pas de typage ici ! ni de controle du nullable / undefined
    this.prenom = prenom
    console.info(this) // le this, de base, c'est Window !
}

function Hutt(taille) {
    this.taille = taille
    console.info(this) // le this, de base, c'est Window !
}

Wookiee(); // on peut ne rien passer ! pas de controle
Wookiee('Chewie')

const wookiee = new Wookiee('Chewie')
const wookiee2 = new Wookiee('Chewie 2')

const hutt = new Hutt('Hutt')

/**
 * 
 */
class Gungan {
    constructor(prenom) {
        this.prenom = prenom
    }

    parler() {
        console.info('Missa va partir')
    }

    get isAlive() { // accesseur depuis une propriété
        return true
    }
}

const jarjar = new Gungan('Jar jar');
if(jarjar.isAlive) {
    
}

const HuttAExecuterAvecContexteWookiee = Hutt.bind(wookiee, 'Prenom')
HuttAExecuterAvecContexteWookiee()
HuttAExecuterAvecContexteWookiee()