
import { Component } from './core/ui/components/base-component'
import { CreateProfile } from './features/profile/components/create-profile'
import { ArmeService } from './features/profile/services/arme.service';
import { CharacterUI, DisplayChar } from './shared/UIs/character-ui/character-ui';
import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Bienvenue</h1>

    <div id="outlet"></div>
  </div>
`

// const profile: Component = new CreateProfile({
//   getAll: () => {
//     return []
//   }
// });
// IoC : inversion des responsabilités
// Testable !
const profile: Component = new CreateProfile(new ArmeService())
profile.render()

//#region Character UI 
const character = new CharacterUI()

const callbackConsole: DisplayChar = character => console.info(character)

const callbackHtml: DisplayChar = character =>  {
  document.querySelector<HTMLDivElement>('#player')!.innerHTML = `
  <div id="player>
    ${character.nickName}
  </div>
`
}
character.render(callbackConsole)
character.render(callbackHtml)
//#endregion


