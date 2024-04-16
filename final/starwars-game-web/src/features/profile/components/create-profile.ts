import { GetAllService } from "../../../core/custom-types";
import { Component } from "../../../core/ui/components/base-component";
import { Arme } from "../models";

export class CreateProfile implements Component {
    constructor(private armeService: GetAllService<Arme>) {}

    private prepareArmes(): string[] {
        return this.armeService.getAll().map(item => `<option>${item.label}</option>`)
    }

    private renderArmes(): string {
        let html = ''
        const armes = this.prepareArmes()
        armes.forEach(item => html += item)

        return `<select>${html}</select>`
    }

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
                ${ this.renderArmes() }
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

