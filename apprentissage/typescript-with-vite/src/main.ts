import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'
import { GeoSphere } from 'd3'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)

// $.ajax('')

const geo: GeoSphere = {
  
}