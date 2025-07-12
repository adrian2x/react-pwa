import { NavLink, Route, Routes } from 'react-router'
import Home from './routes/Home'
import About from './routes/About'

import './App.css'
import { Navbar } from './components/navbar/Navbar'
import { TbHome, TbInfoCircle } from 'react-icons/tb'
import { Drawer } from './components/drawer/Drawer'
import { useRef } from 'react'

function App() {
  const drawerLeft = useRef<HTMLInputElement>(null)
  const closeDrawer = () => (drawerLeft.current!.checked = false)
  return (
    <>
      <Drawer id='drawerLeft' ref={drawerLeft} sidebar={<SidebarNav onNavClick={closeDrawer} />}>
        <Navbar />
        {/* See https://reactrouter.com/start/declarative/routing */}
        <Routes>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
        </Routes>
      </Drawer>
    </>
  )
}

export default App

function SidebarNav({ onNavClick }: { onNavClick: () => void }) {
  return (
    <ul className='menu bg-base-200 text-base-content min-h-full w-80 p-4'>
      {/* <li>
            <h2 className="menu-title">Brand</h2>
          </li> */}
      <li>
        <NavLink to='/' onClick={onNavClick}>
          <TbHome size={22} /> Home
        </NavLink>
      </li>
      <li>
        <NavLink to='/about' onClick={onNavClick}>
          <TbInfoCircle size={22} /> About
        </NavLink>
      </li>
    </ul>
  )
}
