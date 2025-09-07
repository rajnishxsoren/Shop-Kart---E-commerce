import React, { useEffect, useState } from 'react'
import UploadProduct from '../components/UploadProduct.jsx'
import Api from '../common/Api.jsx'
import AdminProductCard from '../components/AdminProductCard.jsx'

const AllProducts = () => {
  const [openUploadProduct,setOpenUploadProduct] = useState(false)
  const [allProduct,setAllProduct] = useState([])

  const fetchAllProduct = async() =>{
    const response = await fetch(Api.allProduct.url,{
      method : Api.allProduct.method
    })
    const dataResponse = await response.json()

    console.log("product data",dataResponse)

    setAllProduct(dataResponse?.data || [])
  }

  useEffect(()=>{
    fetchAllProduct()
  },[])
  
  return (
    <div className='h-[80vh]'>
        <div className='bg-red-100 py-2 px-4 flex justify-between items-center'>
            <h2 className='font-bold text-lg text-red-700'>All Product</h2>
            <button  className='border-2 border-red-700 text-red-700 hover:bg-red-600 hover:text-white transition-all py-1 px-3 rounded-full ' onClick={()=>setOpenUploadProduct(true)}>Upload Product</button>
        </div>

        {/**all product */}
        <div className='flex items-center flex-wrap gap-5 py-4 h-[70vh] overflow-y-scroll justify-center'>
          {
            allProduct.map((product,index)=>{
              return(
                <AdminProductCard data={product} key={index+"allProduct"} fetchdata={fetchAllProduct}/>
                
              )
            })
          }
        </div>





        {/**upload prouct component */}
        {
          openUploadProduct && (
            <UploadProduct onClose={()=>setOpenUploadProduct(false)} fetchData={fetchAllProduct}/>
          )
        }
      

    </div>
  )
}

export default AllProducts;