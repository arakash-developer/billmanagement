"use client"
import React, { useContext, useEffect, useLayoutEffect, useState } from 'react'
import withAuth from '../auth/withAuth'
import { useRouter } from 'next/navigation'
import { Contex } from '../contexapi/Rights'
import Image from 'next/image'
import axios from 'axios'

const page = () => {
  let [loading, setLoading] = useState(false)
  let [data, setData] = useState([])
  let [tok, setTok] = useState()
  const router = useRouter();
  let { validated, setValidated } = useContext(Contex)
  useLayoutEffect(() => {
    let valid = localStorage.getItem('login');
    if (valid) {
      setValidated(true)
    }
  }, [])
  useLayoutEffect(() => {
    let token = localStorage.getItem("token")
    setTok(token)
    let getdata = async () => {
      setLoading(true)
      let blobs = await fetch("https://billmanagement-server.vercel.app/profilesetting", {
        headers: {
          "token": token ? token : "",
        }
      })
      let response = await blobs.json();
      setData(response.profileset)
      setLoading(false)
    }
    getdata()

  }, [])

  const [file, setfile] = useState()
  const [name, setName] = useState()
  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("name", name);
    await axios.post("http://localhost:4000/profileuploadupdate", formData, {
      headers: {
        "Content-Type": "multipart/form-data",  
        "token": tok ? tok : "",
      }
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  if (loading) {
    return null
  }
  return (
    <div className='bg-red-700'>Book page 90
      <Image src={data.profileimage} alt="cc" width={100} height={100} />

      <div className="">
        <input type="file" onChange={(e) => setfile(e.target.files[0])} />
        <input type="text" onChange={(e) => setName(e.target.value)} />
        <button onClick={handleUpload}>Upload</button>
      </div>
    </div>
  )
}

export default withAuth(page) 