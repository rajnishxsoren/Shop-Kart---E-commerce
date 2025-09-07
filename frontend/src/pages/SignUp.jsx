import React, { useState } from 'react'
import LoginIcon from '../assest/signin.gif';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { PrefetchPageLinks } from 'react-router-dom';
import { Link ,useNavigate} from 'react-router-dom';
import { MdFileUpload } from "react-icons/md";
import imageTobase64 from '../helpers/ImageToBase64';
import Api from '../common/Api';
import { toast } from 'react-toastify';

function SignUp() {
    const [showPassword ,setShowPassword]=useState(false);
    const [showConformPassword ,setShowConformPassword]=useState(false);

    const [data,setData]=useState({
        email:"",
        password : "",
        confromPassword :"",
        username:"",
        profilePic:""
    });
    const navigate = useNavigate();

    const handleOnChange =(inputData)=>{
        const {name,value}=inputData.target
        setData((prev)=>{
            return {
                ...prev,
                [name] : value
            }
        })
    } 
    const handleOnChangeFile = async (inputPic)=>{
      const file=inputPic.target.files[0];
      const Pic = await imageTobase64(file);
      // console.log(Pic);
      setData((prev)=>{
        return {
            ...prev,
            profilePic:Pic
        }})
      
    }
    const handleSummit = async (sub) => {
        sub.preventDefault();
      
        // Validate passwords match
        if (data.password !== data.confromPassword) {
          // console.log("Password and confirm password do not match.");
          toast.error("Password and confirm password does not match.");
          return;
        }
      
        try {
          console.log("Backend SignUp URL:", Api.signup.url);
      
          // Make the API request
          const response = await fetch(Api.signup.url, {
            method: Api.signup.method || "POST", // Default to POST if the method is not defined
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          });
      
          // Check if the response is OK
          if (!response.ok) {
            const errorMessage = await response.text(); // Optional: Read error message from backend
            throw new Error(
              `Failed to sign up: ${response.status} ${response.statusText}. ${errorMessage}`
            );
          }
      
          // Parse and log the API response
          const dataApi = await response.json();
              if(dataApi.success){
                  toast.success(dataApi.message);
                  navigate('/Login');
              }
              if(dataApi.error)
                  toast.error(dataApi.message);
          // console.log("SignUp successful:", dataApi);
      
          // Optional: Redirect or show success message
        } catch (error) {
          console.error("Error during signup:", error.message);
        }
      };
      
console.log(`Data Login : ${data}`);

  return (
    <section id='SignUp' className='m-6'>
        <div className='mx-auto container p-8 '>
            <div className='bg-white p-10 w-full max-w-md mx-auto rounded-lg shadow-lg shadow-black-700 grid
             gap-5'>
                <div className='w-20 h-20 mx-auto rounded-full'>
                  <div>
                  <img src={data.profilePic ||  LoginIcon} alt="LoginIcon" />
                  </div>
                  <div className='relative'>
                    <form action="">
                    
                    <div className='text-xs bg-opacity-70 bg-slate-400 p-2 w-full cursor-pointer text-center absolute -top-8 rounded-b-xl right-0'>
                        Upload
                      </div>
                      <label className=' w-20  h-10 overflow-hidden absolute  -top-9'>
                        <input type="file" className='hidden' onChange={handleOnChangeFile} />
                      </label>
                      
                    </form>
                  </div>
                </div>

                <form action="" onSubmit={handleSummit}>

                <div className='grid'>
                    <label >UserName:</label>
                   <div className='bg-slate-100 p-2'> 
                    <input type="text" name="username" required value={data.username} onChange={handleOnChange} placeholder='enter Username' className='w-full h-full outline-none bg-transparent' /></div>
                </div>

                <div className='grid'>
                    <label >Email:</label>
                   <div className='bg-slate-100 p-2'> 
                    <input type="email" name="email" value={data.email} required onChange={handleOnChange} placeholder='enter Email' className='w-full h-full outline-none bg-transparent' /></div>
                </div>
 
                <div>
                    <label >Password :</label>
                    <div  className='bg-slate-100 p-2 flex'>
                    <input type={showPassword?"text":"password"} name="password" value={data.password} required onChange={handleOnChange} placeholder='enter Password' className='w-full h-full outline-none  bg-transparent' />
                   <div className='flex items-center justify-center cursor-pointer  ' onClick={()=>setShowPassword((prev)=>!prev)}>
                        <span>
                            {showPassword?(<FaEyeSlash/>):(<FaEye/>)}
                        </span>
                    </div>
                    </div>
                </div>

                <div>
                    <label >ConformPassword :</label>
                    <div  className='bg-slate-100 p-2 flex'>
                    <input type={showConformPassword?"text":"password"} name="confromPassword"  value={data.confromPassword} onChange={handleOnChange} required placeholder='enter Password' className='w-full h-full outline-none  bg-transparent' />
                   <div className='flex items-center justify-center cursor-pointer  ' onClick={()=>setShowConformPassword((prev)=>!prev)}>
                        <span>
                            {showConformPassword?(<FaEyeSlash/>):(<FaEye/>)}
                        </span>
                    </div>
                    </div>
                </div>

                <div>
                    <button className='bg-red-600 text-white p-2 w-full rounded-md mx-auto mt-3 hover:bg-red-700 block'>SignUp</button>
                </div>
            </form>
               <div>
                <p>Already have Account ? <Link to={'/Login'} className=' hover:underline hover:text-red-600 font-bold'>Login</Link></p>
               </div>
            </div>

            

        </div>
    </section>
  )
}

export default SignUp