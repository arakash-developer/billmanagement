"use client"
import React, { useContext, useLayoutEffect } from 'react'
import Container from '../component/layers/Container';
import ProfileInfo from '../component/ProfileInfo';
import withAuth from '../auth/withAuth';

const page = () => {

  return (
    <div>
      <Container>
        <ProfileInfo/>
      </Container>
    </div>

  )
}

export default withAuth(page)