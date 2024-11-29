"use client"
import React from 'react'
import Container from '../component/layers/Container';
import axios from 'axios';

const page = () => {
  let handlerlogOut = () => {
    console.log("AKASH");
    axios.get('https://billmanagement-server.vercel.app/logout')
      .then(function (response) {
        console.log(response.data.status);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  return (
    <div>
      <Container>
        <h1>
          Profile Page
        </h1>
        <button onClick={handlerlogOut}>LogOut</button>
      </Container>
    </div>

  )
}

export default page