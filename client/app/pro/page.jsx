"use client"
import React, { useEffect } from 'react'
const axios = require('axios');


const page = () => {
  let getdata = async () => {
    await axios.get('https://billmanagement-server.vercel.app/pro', {
      withCredentials: true
    })
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }
  useEffect(() => {
    getdata();
  }, [])
  return (
    <div>page</div>
  )
}

export default page