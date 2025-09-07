import { use } from "react";
const backendDomain = import.meta.env.VITE_BACKEND_URL;

const Api= {
    signup :{
        url : `${backendDomain}/api/signup`,
        method : "POST"
    },
    login :{
        url : `${backendDomain}/api/login`,
        method : "POST"
    },
    userDetail :{
        url : `${backendDomain}/api/user-details`,
        method : "GET"
    },
    logout : {
        url : `${backendDomain}/api/logout`,
        method : "POST"
    },
    allUsersApi : {
        url : `${backendDomain}/api/all-users`,
        method : "GET"
    },
    updateUser : {
        url : `${backendDomain}/api/update-user`,
        method : "POST"
    },
    uploadProduct : {
       url : `${backendDomain}/api/upload-product`,
        method : "POST"
    },
    allProduct:{
         url : `${backendDomain}/api/get-product`,
        method : "GET"
    },
    updateProduct : {
         url : `${backendDomain}/api/update-product`,
        method : "POST"
    },
    categoryProduct:{
         url : `${backendDomain}/api/get-catagory`,
        method : "GET"
    },
    categoryALLProductList:{
        url : `${backendDomain}/api/catagory-allProduct`,
       method : "POST"
   },
   productDetails : {
    url : `${backendDomain}/api/product-details`,
   method : "POST"
},
addToCartProduct : {
    url : `${backendDomain}/api/addtocart`,
   method : "POST"
},
countAddToCartProduct : {
    url : `${backendDomain}/api/countAddToCartProduct`,
   method : "Get"
},
addToCartProductView : {
    url : `${backendDomain}/api/view-cart-product`,
   method : "Get"
},
updateCartProduct :{
     url : `${backendDomain}/api/update-cart-product`,
   method : "post"
},
deleteCartProduct :{
       url : `${backendDomain}/api/delete-cart-product`,
       method : "POST"
},
searchProduct : {
      url : `${backendDomain}/api/search`,
       method : "GET"
},
filterProduct : {
    url : `${backendDomain}/api/filter-product`,
       method : "POST"
},
Payment : {
     url : `${backendDomain}/api/checkout`,
       method : "POST"
}

}

export default Api;