import React from 'react'

const Container = ({ className , children }) => {
  return (
    <div className={`max-w-[1920px] mx-auto px-2 ${className}`}>
        {children}
    </div>
  )
}

export default Container