import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home/Home';
import Checkout from './pages/Checkout/Checkout';
import Cart from './pages/Cart/Cart';



function Router() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Home />
        },
        {
          path: "/cart",
          element: <Cart />
        },
        {
          path: "/checkout",
          element: <Checkout />
        },
        
    ])
    return (
        <RouterProvider router={router} />

    )
}

export default Router