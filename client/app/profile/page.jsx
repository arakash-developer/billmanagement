"use client"
import React from 'react'
import Container from '../component/layers/Container';


const page = () => {
  let handlerlogOut = () => {
    localStorage.removeItem('token');
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