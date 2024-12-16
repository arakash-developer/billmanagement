import React from 'react'

const page = () => {
  return (
    <div>page</div>
  )
}
export default page

export const getserverSideProps = async(contex) => {
  console.log(contex);
  return {
    props: {},
  }
}

