import clsx from 'clsx'
import { PiSignOutBold } from 'react-icons/pi'
import { TbDots, TbHome, TbInfoCircle, TbMenu2, TbSearch, TbUserCircle } from 'react-icons/tb'
import { Link, NavLink, useNavigate } from 'react-router'
import { useUser } from '../../lib/firebase/hooks'
import { LoginButton } from '../../lib/firebase/ui'
import { Avatar } from '../avatar/Avatar'
import { Dropdown } from '../dropdown/Dropdown'

export type NavbarProps = {
  className?: string
}

export function Navbar(props: NavbarProps) {
  const navigate = useNavigate()
  const { user, signOut } = useUser()

  async function onSignOut() {
    await signOut()
    navigate('/')
  }

  return (
    <div className={clsx('navbar bg-base-100 min-h-[48px]', props.className)}>
      <div className='navbar-start'>
        <div className='dropdown'>
          <label htmlFor='drawerLeft' className='btn btn-ghost btn-square'>
            <TbMenu2 size={22} />
          </label>
        </div>
        <Link to='/' className='text-md font-bold ml-2'>
          Brand
        </Link>
      </div>
      <div className='navbar-center hidden lg:flex'>
        <ul className='menu menu-horizontal px-1 gap-4'>
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
        {!user ? (
          <LoginButton />
        ) : (
          <Dropdown
            className='dropdown-end'
            trigger={
              <div tabIndex={0} role='button' className='btn btn-ghost btn-circle'>
                {user ? (
                  <Avatar>
                    {user.photoURL ? (
                      <img src={user.photoURL} referrerPolicy='no-referrer' />
                    ) : (
                      <TbUserCircle size={24} />
                    )}
                  </Avatar>
                ) : (
                  <TbDots size={22} />
                )}
              </div>
            }>
            <ul className='menu bg-base-100 p-2 w-full'>
              {/* <li className='menu-title'>Title</li> */}
              <li>
                <NavLink to='/'>
                  <TbHome size={20} /> Home
                </NavLink>
              </li>
              <li>
                <NavLink to='/about'>
                  <TbInfoCircle size={20} /> About
                </NavLink>
              </li>
              <li>
                <div role='button' tabIndex={0} onClick={onSignOut}>
                  <PiSignOutBold size={20} /> Sign out
                </div>
              </li>
            </ul>
          </Dropdown>
        )}
      </div>
    </div>
  )
}
