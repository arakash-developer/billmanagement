"use client";

import { useEffect } from "react";

export default function Testing() {
        useEffect(() => {
            let token = localStorage.getItem("token")
            let getdata = async () => {
                let blobs = await fetch("https://billmanagement-server.vercel.app/cash", {
                    headers: {
                        withCredentials: true,
                        "token": token ? token : "",
                    }
                })
                let response = await blobs.json();
                let clients = response;
             
            }
            getdata()
        }, [])
    
    return (
        <div>
            <h1>Testing</h1>
        </div>
    )
}
