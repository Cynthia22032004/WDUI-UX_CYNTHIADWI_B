import { useId } from 'react'
import { Link } from 'react-router-dom';
import { useUser } from '../../context/UserContext';

export default function Navbar({onSearchChange}) {
  const inputId = useId()
  const { isLoggedIn, login, logout } = useUser();

  const handleSearchInput = (e) => {
    onSearchChange(e.target.value)
  }
  return (
    <nav className='grid grid-cols-3 justify-between px-24 py-4 bg-[#219B9D] items-center'>
        <ul>
          <li className='flex items-center justify-center'>
            <h3 className='text-white font-bold mr-4 '>FreshEat</h3>
            <Link to='/' className='text-[#F2F4FF] hover:text-[#565f93] active:text-[#1d2342]'>Home</Link>
          </li>
        </ul>
        <ul className='flex justify-center items-center'>
          <li className='w-full'>
            <input type="text" className='text-black active:text-black focus:text-black px-4 py-2 w-full rounded-md border ' name="search" id={inputId} placeholder='Search product...' onChange={handleSearchInput} />
          </li>
        </ul>
        {!isLoggedIn ? (
            <ul className='flex gap-2 justify-end'>
              <li className='text-[#F2F4FF] hover:text-[#565f93] active:text-[#1d2342]'>
                {/* <Link to="">Sign in</Link> */}
                <button onClick={ login}>Sign in</button>
              </li>
              <li>
                <Link className='text-[#F2F4FF] hover:text-[#565f93] active:text-[#1d2342]' to="/singup">Sign up</Link>
              </li>
          </ul>
        )
        : (
            <ul className='flex justify-end gap-2'>
              <li >
                <Link className='text-[#F2F4FF] hover:text-[#565f93] active:text-[#1d2342]' to="/cart">
                    Cart
                </Link>
              </li>
              <li >
                <Link to='/orders' className='text-[#F2F4FF] hover:text-[#565f93] active:text-[#1d2342]'>My Orders</Link>
              </li>
              <li>
                <button onClick={logout} className='text-[#F2F4FF] hover:text-[#565f93] active:text-[#1d2342]'>Sign out</button>
              </li>
            </ul>
        )}
    </nav>
  )
}