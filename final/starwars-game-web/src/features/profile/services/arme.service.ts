import { GetterService, TypeOrUndefined } from "../../../core/custom-types";
import { Arme, Armes } from "../models";

export class ArmeService implements GetterService<Arme> {
    getOne(id: number): TypeOrUndefined<Arme> {
        throw new Error("Method not implemented.");
    }
    
    getAll(): Armes {
        return [
            { id: 1, label: 'Arbalete' },
            { id: 2, label: 'Arbalete 2' },
            { id: 3, label: 'Pisto laser 3' }
        ]
    }
}