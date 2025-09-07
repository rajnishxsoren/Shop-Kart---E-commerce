import React from 'react';
import CANCEL from '../assest/cancel.gif';
import {Link} from 'react-router-dom';


function Success() {
  return (
    <div className='h-[80vh] bg-slate-100 flex justify-center'>
            <div className='bg-slate-200 w-[400px] flex flex-col justify-center items-center gap-4 h-[50vh] my-7 rounded-lg'>
                 <img src={CANCEL} alt="" />
                 <p className='text-2xl font-semibold  text-red-600'>Payment Failed!</p>
                <Link to={'/cart'} className='p-2 border-2 rounded-md text-red-600 hover:bg-red-600 hover:text-white border-red-600'>Go To Cart</Link>
            </div>
    </div>
  )
}

export default Success