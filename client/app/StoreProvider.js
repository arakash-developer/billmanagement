"use client"
import React from 'react'
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Rights from './contexapi/Rights';
import { Provider } from 'react-redux';
import { store } from './redux/store';



const StoreProvider = ({ children }) => {
    return (
        <>
            <Provider store={store}>
                <Rights>
                    {children}
                </Rights>
            </Provider>
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
        </>

    )
}

export default StoreProvider