import { TypeOrUndefined } from "../../../core/custom-types";
import { Character } from "./models";

export type DisplayChar = (perso: Character) => void

export class CharacterUI {
    data: TypeOrUndefined<Character>

    render(display: DisplayChar): void {
        if(this.data) {
            display(this.data)
            //console.info(this.data)
        }
    }
}