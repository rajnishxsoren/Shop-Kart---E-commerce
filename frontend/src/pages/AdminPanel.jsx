import React from 'react'
import { useSelector } from 'react-redux';
import { FaUserCircle } from "react-icons/fa";
import {Link} from 'react-router-dom';
import { Outlet } from 'react-router-dom';

const AdminPanel = () => {
    const user = useSelector((state) => state?.user?.user);

  return (
    <div className='h-[80vh] bg-slate-100 hidden md:flex'>
<aside className='w-full min-h-full max-w-80 bg-yellow-50 shadow-lg '>
      <div  className='h-35 flex justify-center items-center shadow-md rounded bg-gradient-to-r from-yellow-300 to-yellow-500'>
            <div className=' flex-col gap-2  items-center justify-center p-2'>
                        <div className='text-7xl cursor-pointer'>
                         {user?.profilePic ? (
                           <img src={user?.profilePic} alt="Profile" className='w-20 h-20 rounded-full' />
                         ) : (
                           <FaUserCircle/>
                         )
                         }
                         </div>
            <p className='text-center capitalize text-xl font-semibold'>
                {user?.username}
            </p>
             <p className='text-center text-xs'>{user?.role}</p>

         </div>
      </div>
      <nav className='p-4 grid gap-3'>
            <Link to={'all-users' } className='px-1 py-2 hover:bg-slate-100' >All Users</Link>
            <Link to={'all-products'} className='px-1 py-2 hover:bg-slate-100' >Products</Link>
         </nav> 
</aside>

<main className='h-full w-full p-4'>
   <Outlet/>
</main> 

    </div>
  )
}

export default AdminPanel