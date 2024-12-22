"use client"
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
// import localStorage from 'localstorage-polyfill';

export default function withAuth(Component){
    return function withAuth(props){
        const router = useRouter()
        const [valid, setValid] = useState(false);
        useEffect(()=>{
            let valid = localStorage.getItem('login');
            setValid(valid)
            if(!valid){
                router.push('/')
            }
        },[])
        if(!valid){
            return null;
        }
        return <Component {...props} />

    }
}
