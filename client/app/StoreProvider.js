"use client"
import React from 'react'
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';



const StoreProvider = ({ children }) => {
    return (
        <div>
            {children}
            <ToastContainer
                position="bottom-left"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored" />
        </div>

    )
}

export default StoreProvider