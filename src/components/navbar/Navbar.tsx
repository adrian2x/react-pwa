import clsx from 'clsx'
import { TbDots, TbHome, TbInfoCircle, TbMenu2, TbSearch, TbUserCircle } from 'react-icons/tb'
import { Link, NavLink } from 'react-router'
import { Dropdown } from '../dropdown/Dropdown'

export type NavbarProps = {
  className?: string
}

export function Navbar(props: NavbarProps) {
  return (
    <div className={clsx('navbar bg-base-100 min-h-[50px]', props.className)}>
      <div className='navbar-start'>
        <div className='dropdown'>
          <label htmlFor='drawerLeft' className='btn btn-ghost btn-square'>
            <TbMenu2 size={24} />
          </label>
        </div>
        <Link to='/' className='text-md font-bold ml-2'>
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
      <div className='navbar-end gap-1 md:gap-2'>
        <div role='button' className='btn btn-ghost btn-circle'>
          <TbSearch size={22} />
        </div>
        <Dropdown
          className='dropdown-end'
          trigger={
            <div tabIndex={0} role='button' className='btn btn-ghost btn-circle'>
              <TbDots size={22} />
            </div>
          }>
          <ul className='menu bg-base-100 p-2 w-full'>
            <li>
              <NavLink to='/'>
                <TbHome size={20} /> Home
              </NavLink>
            </li>
            <li>
              <a>
                <TbUserCircle size={20} /> Parent
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
                <TbInfoCircle size={20} /> About
              </NavLink>
            </li>
          </ul>
        </Dropdown>
      </div>
    </div>
  )
}
