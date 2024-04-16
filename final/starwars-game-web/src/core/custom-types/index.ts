export type TypeOrUndefined<T> = T | undefined

/**
 * 
 */
export interface GetAllService<T extends { id: number }> {
    getAll(): T[]
}

/**
 * 
 */
export interface GetOneService<T extends { id: number }> {
    getOne(id: number): TypeOrUndefined<T>
}

// Approche CQRS
export interface GetterService<T extends { id: number }> extends GetAllService<T>, GetOneService<T> {}
