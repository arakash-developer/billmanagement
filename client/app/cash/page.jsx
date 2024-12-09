import React from 'react'
import CashMemo from '../component/CashMemo'
import LocalClient from '../component/LocalClient'

const Home = () => {
  return (
    <div className=''>
      <LocalClient/>
      <CashMemo />
    </div>
  )
}

export default Home