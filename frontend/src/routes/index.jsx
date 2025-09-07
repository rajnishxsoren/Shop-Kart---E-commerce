import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Home from '../pages/Home'
import Login from '../pages/Login'
import ForgotPassowrd from '../pages/ForgotPassword.jsx'
import SignUp from '../pages/SignUp.jsx'
import AdminPanel from '../pages/AdminPanel.jsx'
import AllUsers from '../pages/AllUsers.jsx'
import AllProducts from '../pages/AllProducts.jsx'
import CategoryProduct from '../components/CatagoryProduct.jsx'
import ProductDetails from '../pages/ProductDetails.jsx'
import Cart from '../pages/Cart.jsx'
import SearchProduct from '../pages/SearchProduct.jsx'
import Success from '../pages/Success.jsx'
import Cancel from '../pages/Cancel.jsx'
import OrderPage from '../pages/OrderPage.jsx'

const router = createBrowserRouter([
    {
        path : "/",
        element : <App/>,
        children : [
            {
                path : "",
                element : <Home/>
            },
            {
                path : "login",
                element : <Login/>
            },
            {
                path : "forgot-password",
                element : <ForgotPassowrd/>
            },
            {
                path : "sign-up",
                element : <SignUp/>
            },
            {
                path : "product-category",
                element : <CategoryProduct/>
            },
            {
                path : "product/:id",
                element : <ProductDetails/>
            },
            {
                path : 'cart',
                element : <Cart/>
            },
            {
                path : "search",
                element : <SearchProduct/>
            },
            {  
                 path : "success",
                 element : <Success/>
            },
            {  
                path : "cancel",
                element : <Cancel/>
           },
           {  
            path : "order",
            element : <OrderPage/>
       },
            {
                path : "admin-panel",
                element : <AdminPanel/>,
                children : [
                    {
                        path : "all-users",
                        element : <AllUsers/>
                    },
                    {
                        path : "all-products",
                        element : <AllProducts/>
                    }
                ]
            },
        ]
    }
])


export default router