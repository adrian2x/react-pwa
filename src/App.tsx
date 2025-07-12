import { Route, Routes } from 'react-router'
import Home from './routes/Home'
import About from './routes/About'

import './App.css'
import { Navbar } from './components/navbar/Navbar'

function App() {
  return (
    <>
      <Navbar />
      {/* See https://reactrouter.com/start/declarative/routing */}
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </>
  )
}

export default App
