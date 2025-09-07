import React from 'react'
import CategoryList from '../components/CatagoryList.jsx'
import BannerProduct from '../components/BannerProduct.jsx'
import HorizontalCardProduct from '../components/HorizentalCardProduct.jsx'
import VerticalCardProduct from '../components/VerticalCardProduct.jsx'

const Home = () => {
  return (
    <div>
      <CategoryList/>
      <BannerProduct/>

      <div className='p-2 bg-slate-100'>
      <VerticalCardProduct category={"laptops"} heading={"windows and mac Laptops (Special Discounts for Students)"}/>

      <HorizontalCardProduct category={"airpods"} heading={"Top boAt Airpodes"}/>
      <HorizontalCardProduct category={"watches"} heading={"Popular's Watches (35% Off)"}/>

      <VerticalCardProduct category={"mobiles"} heading={"Mobiles (Special Discounts for Students)"}/>
      <VerticalCardProduct category={"mouse"} heading={"Mouse + Keyboards (Wire and Wireless)"}/>
      <VerticalCardProduct category={"televisions"} heading={"Televisions 4K"}/>
      <VerticalCardProduct category={"camera"} heading={"Camera and Tripods"}/>
      <VerticalCardProduct category={"earphones"} heading={"Wired Earphones + Headsets"}/>
      <VerticalCardProduct category={"speakers"} heading={"boAt Bluetooth Speakers"}/>
      <VerticalCardProduct category={"refrigerator"} heading={"Refrigerator"}/>
      <VerticalCardProduct category={"trimmers"} heading={"Trimmers for Men"}/>
      </div>
    </div>
  )
}

export default Home