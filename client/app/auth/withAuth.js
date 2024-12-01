"use client"
import { redirect } from 'next/dist/server/api-utils'
import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function withAuth(Component){
    return function withAuth(props){
        let valid = localStorage.getItem('login');
        const router = useRouter()
        useEffect(()=>{
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
