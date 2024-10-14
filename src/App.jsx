import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'

function App() {
  return (
    <>
      <h1 className='text-center'>B section Website page</h1>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
      </Routes>
      <footer>Footer hai ye</footer>
    </>
  )
}

export default App
