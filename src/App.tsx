import { useRef } from 'react'
import { TbHome, TbInfoCircle } from 'react-icons/tb'
import { NavLink, Route, Routes } from 'react-router'
import './App.css'
import { Drawer } from './components/drawer/Drawer'
import { AppErrorBoundary } from './components/error-fallback/ErrorFallback'
import { Navbar } from './components/navbar/Navbar'
import HomePage from './routes'
import NotFoundPage from './routes/404'
import AboutPage from './routes/about'

function App() {
  const drawerLeft = useRef<HTMLInputElement>(null)
  const closeDrawer = () => (drawerLeft.current!.checked = false)
  return (
    <>
      <Drawer
        id='drawerLeft'
        ref={drawerLeft}
        drawerContent={<SidebarNav onNavClick={closeDrawer} />}>
        <Navbar />
        {/* See https://reactrouter.com/start/declarative/routing */}
        <AppErrorBoundary>
          <Routes>
            <Route index element={<HomePage />} />
            <Route path='about' element={<AboutPage />} />
            {/* Catch-all route for 404 Not Found */}
            <Route path='*' element={<NotFoundPage />} />
          </Routes>
        </AppErrorBoundary>
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
          <TbHome size={20} /> Home
        </NavLink>
      </li>
      <li>
        <NavLink to='/about' onClick={onNavClick}>
          <TbInfoCircle size={20} /> About
        </NavLink>
      </li>
    </ul>
  )
}
