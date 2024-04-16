import { Component } from "../../core/ui/components/base-component";

export class CreateProfile implements Component {
    render(): void {
        document.querySelector<HTMLDivElement>('#outlet')!.innerHTML = `
        <form>
            <div>
                <div>
                    <label>Prénom</label>
                </div>
                <div>
                    <input type="text" name="prenom" id="prenom">
                </div>
            </div>
            <div>
                <button id="save" type="button">Sauvegarder</button>
            </div>
        </form>
        `

        const button: HTMLButtonElement | null = document.querySelector<HTMLButtonElement>('#save');

        if(!! button) { // type guard du nullable
            button.addEventListener('click', () => { console.info('sauvegardé !') })
        }
    }
}

