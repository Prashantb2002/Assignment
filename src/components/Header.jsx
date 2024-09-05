import React from 'react'
import {NavLink} from 'react-router-dom'

const Header = () => {
  return (
    // <>
    //  <nav className=' text-white px-8 py-4 '>
    //     <ul className='flex items-center justify-between bg-black p-4 rounded-3xl '>
    //         <li className='ml-0'>
    //           <NavLink
    //             to="/"
    //             className={({ isActive }) =>
    //               isActive
    //                 // ? 'text-white bg-gray-800 rounded-2xl  font-bold no-underline	'
    //                  ? 'bg-gray-800 text-white px-8 py-2 rounded-2xl font-bold'
    //                 : 'text-gray-200 hover:text-white'
    //             }
    //             end
    //           >
    //             About
    //           </NavLink>
    //         </li>

    //         {/* Experience Link */}
    //         <li className=''>
    //           <NavLink
    //             to="/experience"
    //             className={({ isActive }) =>
    //               isActive
    //                  ? 'bg-gray-800 text-white px-8 py-2 rounded-2xl font-bold'
    //                 : 'text-gray-200 hover:text-white'
    //             }
    //           >
    //             Experience
    //           </NavLink>
    //         </li>

    //         {/* Recommended Link */}
    //         <li className=''>
    //           <NavLink
    //             to="/recommended"
    //             className={({ isActive }) =>
    //               isActive
    //                  ? 'bg-gray-800 text-white px-8 py-2 rounded-2xl font-bold '
    //                 : 'text-gray-200 hover:text-white'
    //             }
    //           >
    //             Recommended
    //           </NavLink>
    //         </li>
    //     </ul>
    //     </nav> 
    // </>


    <>
  <nav className="text-white px-4 py-2 md:px-8 md:py-4">
    <ul className="flex flex-col md:flex-row items-center justify-between bg-black p-4 rounded-3xl">
      <li className="mb-2 md:mb-0">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? 'bg-gray-800 text-white px-6 py-2 md:px-8 md:py-2 rounded-2xl font-bold'
              : 'text-gray-200 hover:text-white px-6 py-2'
          }
          end
        >
          About
        </NavLink>
      </li>

      <li className="mb-2 md:mb-0">
        <NavLink
          to="/experience"
          className={({ isActive }) =>
            isActive
              ? 'bg-gray-800 text-white px-6 py-2 md:px-8 md:py-2 rounded-2xl font-bold'
              : 'text-gray-200 hover:text-white px-6 py-2'
          }
        >
          Experience
        </NavLink>
      </li>

      <li className="mb-2 md:mb-0">
        <NavLink
          to="/recommended"
          className={({ isActive }) =>
            isActive
              ? 'bg-gray-800 text-white px-6 py-2 md:px-8 md:py-2 rounded-2xl font-bold'
              : 'text-gray-200 hover:text-white px-6 py-2'
          }
        >
          Recommended
        </NavLink>
      </li>
    </ul>
  </nav>
</>


  

  )
}

export default Header
