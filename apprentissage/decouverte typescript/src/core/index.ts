export type TypeOrUndefined<T> = T | undefined
export type NumberOrUndefined = TypeOrUndefined<number>


export type Calcul<T> = (valeur : T) => T
export type CalculerTTC = Calcul<number>
