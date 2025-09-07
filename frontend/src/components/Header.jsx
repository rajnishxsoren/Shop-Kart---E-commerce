import React, { useContext } from 'react'
import Logo from '../assest/SHOP.png';
import { data, Link, useLocation } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import { use } from 'react';
import { useSelector } from 'react-redux';
import Api from '../common/Api';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { setUserDetails } from '../stores/userSlice';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ROLE from '../common/Role.jsx';
import Context from '../context/Context.jsx';

function Header() {
  const navigate=useNavigate();
const [menuDisplay, setMenuDisplay] = useState(false);
const context = useContext(Context);

const user = useSelector((state) => state?.user?.user);
const dispatch = useDispatch();
// console.log("user profile",user?.profilePic);
const SearchInput = useLocation();
const [search,setSearch]=useState(SearchInput?.search?.split("=")[1]);

const handleLogout = async () => {
  const fetchdata = await fetch(Api.logout.url, {
    method : Api.logout.method,
    Credentials : 'include',
  });
  const dataResponse = await fetchdata.json();
  if(dataResponse.success){
    toast.success(dataResponse.message);
    // localStorage.removeItem("token");
    dispatch(setUserDetails(null));
    navigate('/');
    
    // console.log("Logout Success");
}else {
  toast.error(dataResponse.message);
  // console.log("Logout Failed");
}
}


const handleSearch = async (e)=>{
 const {value} = e.target;
 setSearch(value);
 if(value){
  navigate(`/search?q=${value}`);
 }else {
  navigate("/search"); 
 }
}

  return (
    <header className='h-16 shadow-lg bg-white fixed z-40 w-full'>

      {/* LOGO */}
      <div className='h-full container mx-auto flex overflow-hidden items-center justify-between px-4'> 
            <div>
             <Link to={'/'} > 
             <img src={Logo} alt="" className='w-25 h-20 ' />
             </Link>
            </div>
             
  {/* searchBox */}
            <div className='hidden lg:flex items-center w-full justify-between max-w-sm border rounded-full focus-within:shadow-lg  pl-1
            '>
              <input type="text" placeholder='Search Product Here.... ' 
                onChange={handleSearch} value={search}
              className='w-full outline-none p-2 rounded-l-full ' />
              <div className='text-lg h-10 min-w-[50px] bg-red-600 flex items-center justify-center rounded-r-full text-white p-1 cursor-pointer  hover:bg-red-700
              '>
              <FaSearch/>
              </div>
            </div>

  {/* userIcon */}
            <div className='flex items-center gap-6'>

             <div className=' flex items-center gap-2 ' onClick={()=> setMenuDisplay(prev=>!prev)}>

              {
                user?._id &&(
                  <div className='text-3xl cursor-pointer'>
              {user?.profilePic ? (
                <img src={user?.profilePic} alt="Profile" className='w-10 h-10 rounded-full border' />
              ) : (
                <FaUserCircle/>
              )
              }
              </div>
                )
              }
              
             
               {
                menuDisplay && (
                  <div className='absolute top-12 -translate-x-2   bg-white p-1 rounded shadow-sm shadow-slate-400'>
                    {
                      user?.role == ROLE.ADMIN &&(
                        <Link to={'admin-panel/all-products'} className='hidden md:block hover:bg-slate-200 p-2'>Admin Panel</Link> 
                      )
                    }
                  </div>)
               }
             </div> 
                {
                  user?._id && (
                    
               <Link to={"/cart"} className='text-3xl relative'>
               <span><PiShoppingCartSimpleFill/></span>
               <p className='text-xs rounded-full bg-red-600 text-white w-5 h-5 flex items-center justify-center absolute -top-1 -right-2 '>{context?.cartProductCount}</p>
              </Link> 
                  )
                }
  
               <div>
                    {
                      user?._id ?(
                        <button onClick={handleLogout} className='text-white bg-red-600 p-2 rounded-full  flex justify-center hover:bg-red-700'>Logout</button>
                      ) : (
                        <Link to={'/login'}className='text-white bg-red-600 p-2 rounded-full  flex justify-center hover:bg-red-700'>Login</Link>
                      )
                    }
               </div>
            </div>
      </div>
    </header>
  )
}

export default Header