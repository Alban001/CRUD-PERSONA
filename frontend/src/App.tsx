import { Routes, Route } from 'react-router-dom'
import './App.css'
import MainMenu from './components/layaout/MainMenu'
import PersonaForm from './components/personas/PersonaForm'
import TrabajoPage from './components/trabajos/TrabajoPage'

function App() {
  return (
    <Routes>
      <Route path='/' element={<MainMenu />}/>
      <Route path='/personas' element={<PersonaForm />}/>
      <Route path='/trabajos' element={<TrabajoPage />}/>
    </Routes>
  )
}

export default App
