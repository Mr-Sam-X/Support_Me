import React from 'react'
import Link from 'next/link'
const Navbar = () => {
  return (
    <div className="Navbar flex justify-between items-center p-1 bg-gray-800 text-white">
        <div className="Logo  flex justify-center items-center font-bold">
          <img width={[40]} src="/tea.gif" alt="" />
          Support Me</div>
      <ul className="Menu flex space-x-4">
        <Link href="/Login"> <li className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 m-1">
         Login
        </li></Link>
      </ul>
    </div>
  )
}

export default Navbar
