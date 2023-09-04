import './assets/styles/reset.css'
import './App.css'
import { Logo } from './components/Logo'
import { NavFooter } from './components/NavFooter'
import { NavMain } from './components/NavMain'
import { Page01 } from './pages/Page01-ComponentMemory'
import { Page02 } from './pages/Page02-UpdatingObjectsInState'
import { useState } from 'react'
import { Page03 } from './pages/Page03-UpdatingArraysInState'

function App() {
  const [url, setUrl] = useState("/01");
  
  return (
    <>
      <header>
        <Logo />
        <NavMain setUrl={setUrl}/>
      </header>
      <main className='limited-width'>
        { url === "/01" && <Page01/>}
        { url === "/02" && <Page02/>}
        { url === "/03" && <Page03/>}
      </main>
      <footer>
        <NavFooter />
      </footer>
    </>
  )
}

export default App
