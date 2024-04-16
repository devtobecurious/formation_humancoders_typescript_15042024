
import { Component } from './core/ui/components/base-component'
import { CreateProfile } from './features/profile/create-profile'
import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Bienvenue</h1>

    <div id="outlet"></div>
  </div>
`

const profile: Component = new CreateProfile();
profile.render();


