import { mount } from 'svelte'
import Root from './root.svelte'
import './styles/global.css'

const app = mount(Root, {
  target: document.getElementById('app')!,
})

export default app
