import './assets/styles/reset.css'
import './App.css'
import { Logo } from './components/Logo'
import { NavFooter } from './components/NavFooter'
import { NavMain } from './components/NavMain'
import { Page01 } from './pages/Page01-ComponentMemory'

function App() {
  return (
    <>
    <header>
      <Logo/>
      <NavMain/>
    </header>
    <main>
      <Page01/>
    </main>
    <footer>
      <NavFooter/>
    </footer>
    </>
  )
}

export default App
