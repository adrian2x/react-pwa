import { Link, NavLink } from 'react-router'
import { TbMenu2, TbDots } from "react-icons/tb";
import cx from 'clsx'

export type NavbarProps = {
  className?: string
}

export function Navbar(props: NavbarProps) {
  const className = cx('navbar bg-base-100', props.className)
  return (
    <div className={className}>
      <div className='navbar-start'>
        <div className='dropdown'>
          <div tabIndex={0} role='button' className='btn btn-ghost lg:hidden'>
            <TbMenu2 size={24}/>
          </div>
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
        <Link to='/' className='btn btn-ghost text-xl'>daisyUI</Link>
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
            <TbDots size={24}/>
          </div>
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
      </div>
    </div>
  )
}
