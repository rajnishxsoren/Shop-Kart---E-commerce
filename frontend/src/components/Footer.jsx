import React from 'react'
import { FaGithub } from "react-icons/fa6";
import { TbBrandLinkedinFilled } from "react-icons/tb";
import { RiInstagramFill } from "react-icons/ri";
import { SiLeetcode } from "react-icons/si";

function Footer() {
  return (
    <div className='h-[15vh] bg-slate-600 flex items-center justify-center'>
      <div className='text-center flex items-center'>
      <div className='container mx-auto w-auto h-auto  p-6 flex gap-20 text-3xl '>
           <FaGithub/>
           <TbBrandLinkedinFilled/>
           <RiInstagramFill/>
           <SiLeetcode/>
      </div>  
      </div>
      </div>
  )
}

export default Footer