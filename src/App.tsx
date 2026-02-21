import {Routes, Route} from 'react-router-dom'

import Landing from './pages/Landing/Landing'
import Chaveiros from './pages/Chaveiros';
import Pulseiras from './pages/Pulseiras';
import Resina from './pages/Resina';
import Tercos from './pages/Tercos'

import './App.css'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Landing />}/>
      <Route path='/chaveiros' element={<Chaveiros/>}/>
      <Route path='/pulseiras' element={<Pulseiras/>}/>
      <Route path='/resina' element={<Resina/>}/>
      <Route path='/tercos' element={<Tercos/>}/>
    </Routes>
    </>
  )
}

export default App
