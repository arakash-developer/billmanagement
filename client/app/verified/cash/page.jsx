import React from 'react'
import CashMemo from '../component/CashMemo'
import LocalClient from '../component/LocalClient'
import Container from '../component/layers/Container'
import YourProducts from '../component/YourProducts'

const Home = () => {
  return (
    <div className='bg-cash bg-no-repeat bg-cover h-screen'>
      <Container className={"flex justify-between"}>
         {/* <LocalClient/> */}
         <CashMemo />
         <YourProducts/>
      </Container>
    </div>
  )
}

export default Home