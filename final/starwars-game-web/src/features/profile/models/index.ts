import { TypeOrUndefined } from "../../../core/custom-types"

export interface Arme {
    id: number
    label: string
}

/**
 * des commentaires qui valent le coup ! ;)
 */
export type Armes = Arme[]

export interface Profile {
    armeParDefaut: TypeOrUndefined<Arme>
}