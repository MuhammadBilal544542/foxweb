import React from 'react'

const MainIntro = ({ heading, description }) => {
  return (
    <div className="d-flex flex-column align-items-center text-center mb-1">
      <p className="logo-text p-0">{heading}</p>
      <p className="login-description p-0">{description}</p>
    </div>
  )
}

export default MainIntro
