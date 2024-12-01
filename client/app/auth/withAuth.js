"use client"
import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'
// import localStorage from 'localstorage-polyfill';

export default function withAuth(Component){
    return function withAuth(props){
        const router = useRouter()
        useEffect(()=>{
            let valid = localStorage.getItem('login');
            if(!valid){
                router.push('/')
            }
            if(!valid){
                return null;
            }
        },[])
        return <Component {...props} />

    }
}
