import './App.css'
import LOGIN1 from './pages/login'
import Register from './pages/register'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import HOME from './pages/home'
import LOGINADMIN from './pages/loginAdmin'
import FORADMIN from './pages/foradmin'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LOGIN1 />} />
        <Route path="/register" element={<Register />} />
        <Route path='/home' element={<HOME />} />
        <Route path='/admin' element={<LOGINADMIN />}/>
        <Route path='/foradmin' element={<FORADMIN />} /> 
      </Routes>
    </BrowserRouter>
  )
}

export default App
