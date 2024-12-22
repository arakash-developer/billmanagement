// "use client"
// import React, { useEffect, useState } from 'react'
// import { useRouter } from 'next/navigation'

// export default function withAuth(Component){
//     let token = localStorage.getItem("token")
//     console.log(token);
    
//     return function withAuth(props){
//         const router = useRouter()
//         const [valid, setValid] = useState(false);
//         useEffect(()=>{
//             let valid = localStorage.getItem('login');
//             setValid(valid)
//             if(!valid){
//                 router.push('/')
//             }
//         },[])
//         if(!valid){
//             return null;
//         }
//         // return <Component {...props} />

//     }
// }
