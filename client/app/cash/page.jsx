import React from 'react'
import CashMemo from '../component/CashMemo'
import Container from '../component/layers/Container'
import YourProducts from '../component/YourProducts'
import ProfileNavbar from '../component/ProfileNavbar'

const Home = () => {
  return (
    <div className='bg-no-repeat bg-cover'>
      <Container className={"flex justify-between"}>
         <ProfileNavbar/>
         <CashMemo />
         <YourProducts />
      </Container>
    </div>
  )
}

export default Home