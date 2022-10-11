import React from 'react'

const MainLayout = ({ children }) => {
  return (
    <div className="w-screen p-8">
      {children}
    </div>
  )
}

export default MainLayout