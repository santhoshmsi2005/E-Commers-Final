import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import App from "../App";
import ProductsSection from "../pages/product/ProductsSection";
import ProductDetails from "../components/Product/ProductDetails";
import Register from "../pages/auth/Register";
import Login from "../pages/auth/Login";
import Profile from "../components/profile/ProfilePage";
import Cart from "../pages/Cart";

const Routes = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [

            {
                index: true,
                element: <Home />
            },

            {
                path: "/products",
                element: <ProductsSection />
            },
            {
                path: "/product/:id",
                element: <ProductDetails />
            },
            {
                path: "/register",
                element: <Register />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/profile",
                element: <Profile />
            },
            {
                path: "/cart",
                element: <Cart />
            }
        ]
    }
]);


export default Routes;