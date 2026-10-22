"use client";
import React, { useState } from 'react'
import Link from 'next/link'
import { useSession, signIn, signOut } from "next-auth/react"

const Navbar = () => {
  const { data: session } = useSession()
  // React state to handle dropdown visibility natively
  const [isOpen, setIsOpen] = useState(false)
 
  return (
    <div className="Navbar flex justify-between items-center p-1 bg-gray-800 text-white">
      <div className="Logo flex justify-center items-center font-bold gap-2">
        <img width={40} src="/tea.gif" alt="Logo" />
        Support Me
      </div>
      
      <ul className="Menu flex items-center space-x-4">
        {/* If Not Logged In */}
        {!session && (
          <Link href="/Login">
            <li className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 m-1 list-none cursor-pointer">
              Login
            </li>
          </Link>
        )}

        {/* If Logged In */}
        {session && (
          <li className="relative list-none">  
            <button 
              onClick={() => setIsOpen(!isOpen)}
              onBlur={() => setTimeout(() => setIsOpen(false), 200)} // Closes dropdown when clicking away
              className="inline-flex items-center justify-center text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 m-1 cursor-pointer" 
              type="button"
            >
              {/* Displays the dynamic logged-in email fallback if undefined */}
              {session.user?.email || "Account"} 
              <svg 
                className="w-4 h-4 ms-1.5" 
                aria-hidden="true" 
                xmlns="http://w3.org" 
                width="24" 
                height="24" 
                fill="none" 
                viewBox="0 0 24 24"
              >
                <path 
                  stroke="currentColor" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  d="m19 9-7 7-7-7"
                />
              </svg>
            </button>

            {/* Dropdown Menu - Displays conditionally based on state */}
            {isOpen && (
              <div className="absolute right-0 mt-2 z-10 bg-gray-700 border border-gray-600 rounded-lg shadow-lg w-44">
                <ul className="p-2 text-sm text-white font-medium">
                  <li>
                    <Link href="/dashboard" className="inline-flex items-center w-full p-2 hover:bg-gray-600 rounded">
                      Dashboard
                    </Link>
                  </li>
                  <li>
                    <Link href="/Settings" className="inline-flex items-center w-full p-2 hover:bg-gray-600 rounded">
                      Settings
                    </Link>
                  </li>
                  <li>
                    <Link href="/Earnings" className="inline-flex items-center w-full p-2 hover:bg-gray-600 rounded">
                      Earnings
                    </Link>
                  </li>
                  <li className="border-t border-gray-600 mt-1 pt-1">
                    <button 
                      onClick={() => signOut({ callbackUrl: '/' })} 
                      className="inline-flex items-center w-full text-left p-2 hover:bg-red-600 rounded text-red-400 hover:text-white cursor-pointer"
                    >
                      Sign out
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </li>
        )}
      </ul>
    </div>
  )
}

export default Navbar
