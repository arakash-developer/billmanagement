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

  const [file2, setfile2] = useState({ myfile: "" })
  let handleUpload2 = (e) => {
    e.preventDefault();
    console.log("ok");

  }
  let handlefileupload = async (e) => {
    const file = e.target.files[0];
    const base64 = await Convertbase64(file)
    console.log(base64);
    setfile2({ myfile: base64 })
  }

  if (loading) {
    return null
  }
  return (
    <>
      <div className='bg-red-700'>Book page 90
        <Image src={data.profileimage} alt="cc" width={100} height={100} />

        <div className="">
          <input type="file" onChange={(e) => setfile(e.target.files[0])} />
          <input type="text" onChange={(e) => setName(e.target.value)} />
          <button onClick={handleUpload}>Upload</button>
        </div>
      </div>

      <div className='bg-red-700 mt-10'>Book page 90
        <Image src="" alt="cc" width={1000} height={1000} />

        <div className="">
          <input type="file" onChange={(e) => handlefileupload(e)} />
          <button onClick={handleUpload2}>Upload</button>
        </div>
      </div>
    </>
  )
}

export default withAuth(page)

let Convertbase64 = (file) => {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      resolve(fileReader.result);
    };
    fileReader.onerror = (error) => {
      reject(error);
    };
  })
}