import { Outlet } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import { ToastContainer } from 'react-toastify';
import Api from "./common/Api.jsx";
import { useEffect, useState } from "react";
import Context from "./context/Context.jsx";
import { useDispatch } from "react-redux";
import { setUserDetails } from "./stores/userSlice.jsx";

function App() {
   
  const dispatch = useDispatch();

  const [cartProductCount,setCartProductCount]=useState(0);
  const fetchUserDetails = async () => {
    const dataResponse = await fetch(Api.userDetail.url, {
      method: "GET",
      credentials: "include",
    });
    const dataApi = await dataResponse.json();

    if (dataApi.success) {
     dispatch(setUserDetails(dataApi.data));
    }
    console.log("User Data", dataApi);
    
  }

  const fetchUserAddToCart = async ()=>{
    const dataResponse = await fetch(Api.countAddToCartProduct.url, {
      method: Api.countAddToCartProduct.method || "GET",
      credentials: "include",
    });
    const dataApi = await dataResponse.json();
    setCartProductCount(dataApi?.data?.count);

  }
  useEffect(() => {
    fetchUserDetails();
    fetchUserAddToCart();
  }, []);

  return (
    <>
    <Context.Provider value={{
      fetchUserDetails ,
      cartProductCount,
      fetchUserAddToCart
    }}>
              <ToastContainer
                position="top-center"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
               
              />
             <Header/>
              <main className="pt-16">
                   <Outlet/>
             </main>
             <Footer/>
    </Context.Provider>
      
    </>
  )
}

export default App
