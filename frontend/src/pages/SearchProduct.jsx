import React, { useEffect, useState } from 'react';
import {useLocation} from 'react-router-dom';
import Api from '../common/Api.jsx';
import VerticalProductScr from '../components/VerticalProductScr.jsx';
import { IoArrowBack } from "react-icons/io5";
import { Link } from 'react-router-dom';

function SearchProduct() {
      
  const query = useLocation();
  // console.log("Query",query);
  const [data,setData]= useState([]);
  const [loading,setLoading]=useState(false);
  
  const fetchProduct = async ()=>{
    setLoading(true);
    const fetchResponse = await fetch(Api.searchProduct.url+query.search,{
      method : Api.searchProduct.method || 'GET'
    })

    const dataResponse = await fetchResponse.json();
    setData(dataResponse.data);
    setLoading(false);

  }
  
  useEffect(()=>{
    fetchProduct();
  },[query])

  return (
    <div className='container mx-auto p-4 min-h-[80vh] bg-slate-100'>
           {
            loading &&(
              <p className='text-center text-lg'>Loading...</p>
            )
           }
           <div className='flex gap-2'>
           <p className='text-xl cursor-pointer '> 
           <Link to={'/'}> <IoArrowBack/> </Link>
           </p>
           <p className='text-lg font-bold my-3'>Search Result : {data.length}</p>
           </div>
           {
            data.length===0 && !loading && (
                <p className='bg-white text-lg text-center p-4'>NO DATA FOUND...</p>
            )  
           }

           {
            data.length!==0 && !loading && (        
              <VerticalProductScr loading={loading} data={data}/>
            )
           }

    </div>
  )
}

export default SearchProduct