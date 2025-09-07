import React from 'react';
import SUCCESS from '../assest/success.gif';
import {Link} from 'react-router-dom';


function Success() {
  return (
    <div className='h-[80vh] bg-slate-100 flex justify-center'>
            <div className='bg-slate-200 w-[400px] flex flex-col justify-center items-center gap-4 h-[50vh] my-7 rounded-lg'>
                 <img src={SUCCESS} alt="" />
                 <p className='text-2xl font-semibold text-green-600'>Payment Successfull!</p>
                <Link to={'/order'} className='p-2 border-2 rounded-md text-green-600 hover:bg-green-600 hover:text-white border-green-600'>See Order</Link>
            </div>
    </div>
  )
}

export default Success