import express from 'express';
const router=express.Router();

import userLogInInController from '../controllers/user/userLogin.js';
import userSignUpController from '../controllers/user/userSignUp.js';
import userDetailController from '../controllers/user/userDetail.js';
import authToken from '../middleWares/authToken.js';
import userLogout from '../controllers/user/userLogOut.js';
import allUsersController from '../controllers/user/allUsers.js';
import updateUserController from '../controllers/user/updateUser.js';
import getProductController from '../controllers/product/getProduct.js';
import updateProductController from '../controllers/product/updateProduct.js';
import uploadProductController from '../controllers/product/uploadProduct.js';
import getCategoryProduct from '../controllers/product/getCatagoryOneProduct.js';
import getCategoryWiseProduct from '../controllers/product/getCatagoryWiseList.js';
import getProductDetails from '../controllers/product/getProductDetails.js';
import addToCartController from '../controllers/user/addToCart.js';
import countAddToCartProduct from '../controllers/user/countAddToCartProduct.js';
import addToCartViewProductController from '../controllers/user/addToCartProductView.js';
import updateAddToCartProductController from '../controllers/user/updateAddToCartProduct.js';
import deleteAddToCartProductController from '../controllers/user/deleteAddToCartProduct.js';
import searchProductController from '../controllers/product/searchProduct.js';
import filterProductController from '../controllers/product/filterProduct.js';
import paymentController from '../controllers/order/payment.controller.js';
import webHookController from '../controllers/order/webHook.controller.js';



router.post("/signup",userSignUpController);
router.post("/login",userLogInInController);
router.get("/user-details",authToken,userDetailController);
router.post("/logout",userLogout);

//AdminPanel Routes
router.get("/all-users",authToken,allUsersController);
router.post("/update-user",authToken,updateUserController);

// Product
router.post("/upload-product",authToken,uploadProductController);
router.get("/get-product",getProductController);
router.post("/update-product",authToken,updateProductController);
router.get("/get-catagory",getCategoryProduct);
router.post("/catagory-allProduct",getCategoryWiseProduct);
router.post("/product-details",getProductDetails);
router.get("/search",searchProductController);
router.post("/filter-product",filterProductController);

//user ADDTOCART
router.post("/addtocart",authToken,addToCartController);
router.get("/countAddToCartProduct",authToken,countAddToCartProduct);
router.get("/view-cart-product",authToken,addToCartViewProductController);
router.post("/update-cart-product",authToken,updateAddToCartProductController);
router.post("/update-cart-product",authToken,updateAddToCartProductController);
router.post("/delete-cart-product",authToken,deleteAddToCartProductController);


//payment
router.post("/checkout",authToken,paymentController);
router.post("/webhook",webHookController);


export default router;