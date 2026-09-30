import React from 'react'
const Navbar = () => {
  return (
   <nav className='bg-black text-white' >
    <div>Pay Me</div>
    <ul className=' flex gap-1.5'>
        <li>Home </li>
        <li>About</li>
        <li>Projects</li>
        <li>Signup</li>
        <li>Login</li>
        <li>Move</li>
    </ul>
   </nav>
  )
}

export default Navbar