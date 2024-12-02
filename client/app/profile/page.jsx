"use client"
import React, { useContext, useLayoutEffect } from 'react'
import Container from '../component/layers/Container';
import withAuth from '../auth/withAuth';
import ProfileNavbar from '../component/ProfileNavbar';

const page = () => {

  return (
    <div>
      <Container>
        <ProfileNavbar/>
      </Container>
    </div>

  )
}

export default withAuth(page)