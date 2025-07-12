import { Link, NavLink } from 'react-router'
import { TbMenu2, TbDots, TbHome, TbInfoCircle, TbUserCircle } from 'react-icons/tb'
import clsx from 'clsx'

export type NavbarProps = {
  className?: string
}

export function Navbar(props: NavbarProps) {
  const classNames = clsx('navbar bg-base-100 min-h-[50px]', props.className)
  return (
    <div className={classNames}>
      <div className='navbar-start'>
        <div className='dropdown'>
          <label htmlFor='drawerLeft' className='btn btn-ghost'>
            <TbMenu2 size={24} />
          </label>
          <ul
            tabIndex={0}
            className='menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow'>
            <li>
              <NavLink to='/'>Home</NavLink>
            </li>
            <li>
              <a>Parent</a>
              <ul className='p-2'>
                <li>
                  <NavLink to='/'>Home</NavLink>
                </li>
                <li>
                  <NavLink to='/about'>About</NavLink>
                </li>
              </ul>
            </li>
            <li>
              <NavLink to='/about'>About</NavLink>
            </li>
          </ul>
        </div>
        <Link to='/' className='text-md font-bold'>
          Brand
        </Link>
      </div>
      <div className='navbar-center hidden lg:flex'>
        <ul className='menu menu-horizontal px-1'>
          <li>
            <NavLink to='/'>Home</NavLink>
          </li>
          <li>
            <details>
              <summary>Parent</summary>
              <ul className='p-2'>
                <li>
                  <NavLink to='/'>Home</NavLink>
                </li>
                <li>
                  <NavLink to='/about'>About</NavLink>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <NavLink to='/about'>About</NavLink>
          </li>
        </ul>
      </div>
      <div className='navbar-end'>
        <div className='dropdown dropdown-end'>
          <div tabIndex={0} role='button' className='btn btn-ghost'>
            <TbDots size={24} />
          </div>
          <ul
            tabIndex={0}
            className='menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow'>
            <li>
              <NavLink to='/'>
                <TbHome size={22} /> Home
              </NavLink>
            </li>
            <li>
              <a>
                <TbUserCircle size={22} /> Parent
              </a>
              <ul className='p-2'>
                <li>
                  <NavLink to='/'>Home</NavLink>
                </li>
                <li>
                  <NavLink to='/about'>About</NavLink>
                </li>
              </ul>
            </li>
            <li>
              <NavLink to='/about'>
                <TbInfoCircle size={22} /> About
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
