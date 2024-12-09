import React from 'react'
import CashMemo from '../component/CashMemo'
import LocalClient from '../component/LocalClient'
import Container from '../component/layers/Container'

const Home = () => {
  return (
    <div className='bg-cash bg-no-repeat bg-cover h-screen'>
      <Container>
         <LocalClient/>
         <CashMemo />
      </Container>
    </div>
  )
}

export default Home