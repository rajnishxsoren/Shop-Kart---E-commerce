import React, { useContext, useState } from 'react'
import LoginIcon from '../assest/signin.gif';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { PrefetchPageLinks } from 'react-router-dom';
import { Link ,useNavigate} from 'react-router-dom';
import Api from '../common/Api';
import { toast } from 'react-toastify';
import { use } from 'react';
import Context from '../context/Context';


function Login() {
    const [shoePassword ,setShoePassword]=useState(false);

    const [data,setData]=useState({
        email:"",
        password : ""
    });
    const navigate = useNavigate();
    const genernalContext = useContext(Context);


    const handleOnChange =(inputData)=>{
        const {name,value}=inputData.target
        setData((prev)=>{
            return {
                ...prev,
                [name] : value
            }
        })
    } 
    const handleSummit =async (sub)=>{
            sub.preventDefault();

            const dataResponse = await fetch(Api.login.url,{
                method : Api.login.method || "POST",
                credentials : "include",
                headers : {
                    "Content-Type":"application/json"
                },
                body : JSON.stringify(data)
    });
    const dataApi = await dataResponse.json();
    if(dataApi.success){
        toast.success(dataApi.message);
        navigate('/'); 
        genernalContext.fetchUserDetails();
    }else{
        toast.error(dataApi.message);
    }

    // console.log(`Data Login : ${data}`);
}

  return (
    <section id='Login' className='m-6 h-[70vh]'>
        <div className='mx-auto container p-8 '>
            <div className='bg-white p-10 w-full max-w-md mx-auto rounded-lg shadow-lg  grid
             gap-5'>
                <div className='w-20 h-20 mx-auto'>
                <img src={LoginIcon} alt="LoginIcon" />
                </div>

                <form action="" onSubmit={handleSummit}>

                <div className='grid'>
                    <label >Email:</label>
                   <div className='bg-slate-100 p-2'> 
                    <input type="email" name="email" value={data.email} onChange={handleOnChange} placeholder='enter Email' className='w-full h-full outline-none bg-transparent' /></div>
                </div>
 
                <div>
                    <label >Password :</label>
                    <div  className='bg-slate-100 p-2 flex'>
                    <input type={shoePassword?"text":"password"} name="password" value={data.password} onChange={handleOnChange} placeholder='enter Password' className='w-full h-full outline-none  bg-transparent' />
                   <div className='flex items-center justify-center cursor-pointer  ' onClick={()=>setShoePassword((prev)=>!prev)}>
                        <span>
                            {shoePassword?(<FaEyeSlash/>):(<FaEye/>)}
                        </span>
                    </div>
                    </div>
                    <div className='block w-fit  ml-auto hover:underline hover:text-red-600'>
                        <Link to={'/forgot-Password'}>Forgot Password</Link>
                    </div>
                </div>

                <div>
                    <button className='bg-red-600 text-white p-2 w-full rounded-md mx-auto mt-3 hover:bg-red-700 block'>Login</button>
                </div>
            </form>
               <div>
                <p>Don't have Account ? <Link to={'/sign-up'} className=' hover:underline hover:text-red-600 font-bold'>SignUp</Link></p>
               </div>
            </div>

            

        </div>
    </section>
  )
}

export default Login;